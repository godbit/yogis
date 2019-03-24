import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeScoreComponent } from './time-score/time-score.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [TimeScoreComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    TimeScoreComponent
  ]
})
export class YogiChartsModule { }
