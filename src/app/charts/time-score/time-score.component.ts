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
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          unit: 'day',
          tooltipFormat: 'DD/MM/YYYY'
        }
      }],
      yAxes: [{
        scaleLabel: { labelString: 'Poäng' }
      }]
    }
  };

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
    const dates = yogiSeries.series.map(series => new Date(series.date));

    const chartPoints = this.combineToChartPoint(dates, scores);
    this.lineChartData = [
      ...this.lineChartData,
      {
        data: chartPoints.map((entry) => ({ t: entry[0], y: entry[1] })),
        label: id
      }
    ];
  }

  combineToChartPoint(x: Date[], y: number[]) {
    return x.map((date, i) => {
      return [date, y[i]];
    });
  }

  updateLabels(yogiSeries: YogiSeries) {
    if (this.lineChartLabels.length > 0) {
      return;
    }
    this.lineChartLabels = yogiSeries.series.map(series => series.date);
  }

  updateChartColors(id: string) {
    const baseColor = this.chartsService.getColor(id);

    this.lineChartColors = [
      ...this.lineChartColors,
      {
        borderColor: baseColor + 'CC', // 80% opacity
        borderWidth: 4,
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: baseColor + '80', // 50% opacity
        pointBorderWidth: 3,
        pointRadius: 5,
      }
    ];
  }
}
