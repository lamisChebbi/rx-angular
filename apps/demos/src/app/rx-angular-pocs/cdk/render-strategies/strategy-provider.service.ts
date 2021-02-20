import {
  ChangeDetectorRef,
  Inject,
  Injectable,
  NgZone,
  Optional,
} from '@angular/core';

import {
  CustomStrategyCredentialsMap,
  DEFAULT_STRATEGIES,
  DefaultStrategyNames,
  onStrategy,
  RX_CUSTOM_STRATEGIES,
  RX_PRIMARY_STRATEGY,
  StrategyCredentials,
} from '@rx-angular/cdk';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { MonoTypeOperatorFunction } from 'rxjs/internal/types';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';

type StrategyNames<T> = DefaultStrategyNames | T;
type Strategies<T extends string> = CustomStrategyCredentialsMap<
  StrategyNames<T>
>;

// TODO: move to model file if we decided where we store models
export interface ScheduleOnStrategyOptions {
  scope?: {};
  strategy?: string;
  patchZone?: false | NgZone;
}

@Injectable({ providedIn: 'root' })
export class StrategyProvider<T extends string = string> {
  private _strategies$ = new BehaviorSubject<Strategies<T>>(undefined);
  private _primaryStrategy$ = new BehaviorSubject<
    StrategyCredentials<StrategyNames<T>>
  >(undefined);

  get strategies(): Strategies<T> {
    return this._strategies$.getValue();
  }
  get strategyNames(): string[] {
    return Object.values(this.strategies).map((s) => s.name);
  }

  get primaryStrategy(): StrategyNames<T> {
    return this._primaryStrategy$.getValue().name;
  }
  set primaryStrategy(strategyName: StrategyNames<T>) {
    this._primaryStrategy$.next(
      <StrategyCredentials<StrategyNames<T>>>this.strategies[strategyName]
    );
  }

  readonly primaryStrategy$: Observable<StrategyCredentials> = this._primaryStrategy$.asObservable();
  readonly strategies$ = this._strategies$.asObservable();

  readonly strategyNames$ = this.strategies$.pipe(
    map((strategies) => Object.values(strategies).map((s) => s.name)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    @Inject(RX_PRIMARY_STRATEGY)
    defaultStrategy: StrategyNames<T>,
    @Optional()
    @Inject(RX_CUSTOM_STRATEGIES)
    customStrategies: CustomStrategyCredentialsMap<T>
  ) {
    this._strategies$.next({
      ...DEFAULT_STRATEGIES,
      ...(customStrategies || ({} as any)),
    });
    this.primaryStrategy = defaultStrategy;
  }

  registerStrategies(customStrategies: CustomStrategyCredentialsMap<string>) {
    // todo: implement
  }

  scheduleWith<R>(
    work: (v?: R) => void,
    options?: ScheduleOnStrategyOptions
  ): MonoTypeOperatorFunction<R> {
    const strategy = this.strategies[options?.strategy || this.primaryStrategy];
    const scope = options?.scope || {};
    const _work = getWork(work, options?.patchZone);
    return (o$) =>
      o$.pipe(
        switchMap((v) =>
          onStrategy(
            v,
            strategy,
            (_v) => {
              _work(_v);
            },
            { scope }
          )
        )
      );
  }

  schedule<R>(
    work: () => R,
    options?: ScheduleOnStrategyOptions
  ): Observable<R> {
    const strategy = this.strategies[options?.strategy || this.primaryStrategy];
    const scope = options?.scope || {};
    const _work = getWork(work, options?.patchZone);
    let returnVal: R;
    return onStrategy(
      null,
      strategy,
      () => {
        returnVal = _work();
      },
      { scope }
    ).pipe(map(() => returnVal));
  }

  scheduleCD(
    cdRef: ChangeDetectorRef,
    options?: ScheduleOnStrategyOptions & {
      afterCD?: () => void;
      abortCtrl?: AbortController;
    }
  ): AbortController {
    const strategy = this.strategies[options?.strategy || this.primaryStrategy];
    const scope = options?.scope || cdRef;
    const abC = options?.abortCtrl || new AbortController();
    onStrategy(
      null,
      strategy,
      () => {
        strategy.work(cdRef, scope);
        if (options?.afterCD) {
          options.afterCD();
        }
      },
      { scope }
    )
      .pipe(takeUntil(fromEvent(abC.signal, 'abort')))
      .subscribe();
    return abC;
  }
}

function getWork<T>(
  work: (args?: any) => T,
  patchZone?: false | NgZone
): (args?: any) => T {
  let _work = work;
  if (patchZone) {
    _work = (args?: any) => patchZone.run(() => work(args));
  }
  return _work;
}
