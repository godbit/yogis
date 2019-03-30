import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { YogiDetails } from 'src/app/api/yogi-details';
import { GRADE_COLORMAP } from 'src/app/globals/constants';

@Component({
  selector: 'app-grade-distribution',
  templateUrl: './grade-distribution.component.html',
  styleUrls: ['./grade-distribution.component.css']
})
export class GradeDistributionComponent implements OnInit {

  @Input() yogiDetails: YogiDetails;

  public doughnutChartData: SingleDataSet;
  public doughnutChartLabels: Label[];
  public doughnutChartColors: Color[];
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right'
    }
  };



  constructor() { }

  ngOnInit() {
    this.setChartData();
    this.setChartLabels();
    this.setChartColors();
  }

  setChartData() {
    this.doughnutChartData = [
      this.yogiDetails.a,
      this.yogiDetails.b,
      this.yogiDetails.c,
      this.yogiDetails.d,
      this.yogiDetails.e,
      this.yogiDetails.f,
      this.yogiDetails.dash
    ];
  }

  setChartLabels() {
    this.doughnutChartLabels = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      '-'
    ];
  }

  setChartColors() {
    this.doughnutChartColors = [{
      backgroundColor: [
        GRADE_COLORMAP.get('a'),
        GRADE_COLORMAP.get('b'),
        GRADE_COLORMAP.get('c'),
        GRADE_COLORMAP.get('d'),
        GRADE_COLORMAP.get('e'),
        GRADE_COLORMAP.get('f'),
        GRADE_COLORMAP.get('dash')]
    }];
  }
}
