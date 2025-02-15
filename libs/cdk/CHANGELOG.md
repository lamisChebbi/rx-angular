# [1.0.0-alpha.7](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.6...cdk@1.0.0-alpha.7) (2021-03-27)

### Bug Fixes

- **cdk, template:** remove window object access ([#599](https://github.com/rx-angular/rx-angular/issues/599)) ([47b6dbb](https://github.com/rx-angular/rx-angular/commit/47b6dbb66deac7b44cb7aa0f348bc45cd64541fb)), closes [#579](https://github.com/rx-angular/rx-angular/issues/579)

### Features

- **cdk:** infer `getZoneUnPatchedApi` return type and fix types for existing functions ([#603](https://github.com/rx-angular/rx-angular/issues/603)) ([1692653](https://github.com/rx-angular/rx-angular/commit/1692653c8c6cada97fb37af176ca9a41ef93e35d))
- **zone-config:** update zone-config docs and linking ([#627](https://github.com/rx-angular/rx-angular/issues/627)) ([adb613d](https://github.com/rx-angular/rx-angular/commit/adb613daed5767e184135ddd2efe48fa9522a5dd))

# [1.0.0-alpha.6](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.4...cdk@1.0.0-alpha.6) (2021-03-14)

### Bug Fixes

- **zone-config:** Update zone cfg api ([#598](https://github.com/rx-angular/rx-angular/issues/598)) ([8dadf40](https://github.com/rx-angular/rx-angular/commit/8dadf40007c85c8794d21317a702a743100fc1c2))
- **zone-config:** zone-config tests ([#600](https://github.com/rx-angular/rx-angular/issues/600)) ([517e0cf](https://github.com/rx-angular/rx-angular/commit/517e0cf55e38e068c9127395395d1cc63b7b405b))
- **list-manager:** fix list manager return value when no changes happened but values arrived ([#588](https://github.com/rx-angular/rx-angular/issues/588)) ([220be51](https://github.com/rx-angular/rx-angular/commit/220be517d65fc70f851cc3a24bddcd28251d85dd))

# [1.0.0-alpha.5](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.4...cdk@1.0.0-alpha.5) (2021-03-10)

### Bug Fixes

- Fix change detection not running inside the zone when `patchZone` is truthy https://github.com/rx-angular/rx-angular/pull/590
  This change should fix a lot of cdnage detection issues related to event listeners. Special THX to @arturovt

# [1.0.0-alpha.4](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.2...cdk@1.0.0-alpha.4) (2021-02-27)

### Bug Fixes

- ng-packagr builds ([#553](https://github.com/rx-angular/rx-angular/issues/553)) ([cfd4711](https://github.com/rx-angular/rx-angular/commit/cfd47112c12bf7333e657c2f6b6e79d3d3eccda4))
- update typings, allow values in template slots

### Features

- **cdk:** improve template manager view-context ([#561](https://github.com/rx-angular/rx-angular/issues/561)) ([f58b9a2](https://github.com/rx-angular/rx-angular/commit/f58b9a2f147f3ca3cd89038a4603bd2ea0f2fe25))

# [1.0.0-alpha.3](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.2...cdk@1.0.0-alpha.3) (2021-02-24)

### Bug Fixes

- **cdk:** ng-packagr builds ([#553](https://github.com/rx-angular/rx-angular/issues/553)) ([cfd4711](https://github.com/rx-angular/rx-angular/commit/cfd47112c12bf7333e657c2f6b6e79d3d3eccda4))
  removed imports and dependencies to scheduler

# [1.0.0-alpha.2](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.0...cdk@1.0.0-alpha.2) (2021-02-23)

### Bug Fixes

- **cdk:** add scheduler

# [1.0.0-alpha.1](https://github.com/rx-angular/rx-angular/compare/cdk@1.0.0-alpha.0...cdk@1.0.0-alpha.1) (2021-02-22)

### Bug Fixes

- **cdk:** adopt build ([cbc59d3](https://github.com/rx-angular/rx-angular/commit/cbc59d3b05032154ef7829822a6d5fd59ce82010))
- **cdk:** fix build ([e9b6d2d](https://github.com/rx-angular/rx-angular/commit/e9b6d2d51e85d25335f6ded794450df860badaca))

### Features

- **cdk:** harmonize API ([#548](https://github.com/rx-angular/rx-angular/issues/548)) ([054d3e5](https://github.com/rx-angular/rx-angular/commit/054d3e573fc305f0b51e9f48c8dcb85554bf532f))

# 1.0.0-alpha.0 (2021-02-21)

### Bug Fixes

- **cdk:** adopt build ([cbc59d3](https://github.com/rx-angular/rx-angular/commit/cbc59d3b05032154ef7829822a6d5fd59ce82010))
- **cdk:** fix build ([e9b6d2d](https://github.com/rx-angular/rx-angular/commit/e9b6d2d51e85d25335f6ded794450df860badaca))

### Features

- **cdk:** add zone-config ([#492](https://github.com/rx-angular/rx-angular/issues/492)) ([35f2d9b](https://github.com/rx-angular/rx-angular/commit/35f2d9b703401552318f6be665f3442212e43ae1))
- **cdk:** docs and tests ([ce29d15](https://github.com/rx-angular/rx-angular/commit/ce29d15916c676b29d5159121d35605cbcc96885))
- **cdk:** setup render-strategies and template-management ([#489](https://github.com/rx-angular/rx-angular/issues/489)) ([8cbcdbd](https://github.com/rx-angular/rx-angular/commit/8cbcdbde2283327d3a6b404f564b46751f039d1b))
