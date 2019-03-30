import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeScoreComponent } from './time-score/time-score.component';
import { ChartsModule } from 'ng2-charts';
import { GradeDistributionComponent } from './grade-distribution/grade-distribution.component';

@NgModule({
  declarations: [TimeScoreComponent, GradeDistributionComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    TimeScoreComponent,
    GradeDistributionComponent
  ]
})
export class YogiChartsModule { }
