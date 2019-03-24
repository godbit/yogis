import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartsService } from '../charts.service';
import { YogiSeries } from 'src/app/api/yogi-series';
import { ProfileDataService } from 'src/app/profile/profile-data.service';

@Component({
  selector: 'app-time-score',
  templateUrl: './time-score.component.html',
  styleUrls: ['./time-score.component.css']
})
export class TimeScoreComponent implements OnInit {
  finished = false;

  public lineChartData: ChartDataSets[] = [];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  constructor(private chartsService: ChartsService,
              private profileDataService: ProfileDataService) { }

  ngOnInit() {
    const keys = this.profileDataService.getKeys();
    this.initData(keys);
  }

  initData(keys: string[]) {
    for (const key in keys) {
      if (!keys.hasOwnProperty(key)) {
        continue;
      }

      this.chartsService.getData(keys[key]).subscribe(response => {
        const id = keys[key];
        this.updateChartData(response, id);
        this.updateLabels(response);
        this.updateChartColors(id);
        this.finished = true;
      });
    }
  }

  updateChartData(yogiSeries: YogiSeries, id: string) {
    const scores = yogiSeries.series.map(series => series.score);
    this.lineChartData = [
      ...this.lineChartData,
      {data: scores, label: id}
    ];
  }

  updateLabels(yogiSeries: YogiSeries) {
    if (this.lineChartLabels.length > 0) {
      return;
    }
    this.lineChartLabels = yogiSeries.series.map(series => series.date);
    console.log(yogiSeries.series[0].date)
    console.log(new Date(yogiSeries.series[0].date))
  }

  updateChartColors(id: string) {
    this.lineChartColors = [
      ...this.lineChartColors,
      {
        borderColor: this.chartsService.getColor(id),
        fill: false
      }
    ];
    console.log(this.lineChartColors)
  }

}
