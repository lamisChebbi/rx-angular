import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LetModule, PushModule, UnpatchEventsModule } from '@rx-angular/template';
import { ComparisonComponent } from './comparison.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { VisualizerModule } from '../../../../shared/debug-helper/visualizer';
import { SiblingModule } from '../../../../shared/template-structures/sibling/sibling.module';
import { ImageArrayModule } from '../../../../shared/image-array/image-array.module';
import { ROUTES } from './comparison.routes';
import { RxForModule, RxIfModule, PipeModule } from '../../../../rx-angular-pocs';


@NgModule({
  declarations: [ComparisonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatButtonModule,
    UnpatchEventsModule,
    VisualizerModule,
    SiblingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    PushModule,
    ImageArrayModule,
    LetModule,
    RxForModule,
    RxIfModule,
    PipeModule,
  ],
  exports: [],
})
export class ComparisonModule {}
