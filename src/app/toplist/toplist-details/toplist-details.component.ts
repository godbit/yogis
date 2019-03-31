import { Component, OnInit, Input } from '@angular/core';
import { YogiDetails } from 'src/app/api/yogi-details';
import { ATTENDANCE_COLOR_ARRAY, TREND_COLOR_ARRAY } from 'src/app/globals/constants';

@Component({
  selector: 'app-toplist-details',
  templateUrl: './toplist-details.component.html',
  styleUrls: ['./toplist-details.component.css']
})
export class ToplistDetailsComponent implements OnInit {

  @Input() yogiDetails: YogiDetails;
  attendanceColor;
  trendColor;

  constructor() { }

  ngOnInit() {
    this.getAttendanceColor();
    this.getTrendColor();
  }

  getAttendanceColor() {
    this.attendanceColor = this.getItemInArray(ATTENDANCE_COLOR_ARRAY, this.yogiDetails.percent);
  }

  getTrendColor() {
    this.trendColor = this.getItemInArray(TREND_COLOR_ARRAY, this.yogiDetails.trend);
  }

  /**
   * Has to be a sorted array of "key/value" pairs. Returns the first value where
   * key <= the passed property value.
   */
  getItemInArray(array: [number, string][], propertyValue: number): string {
    for (const pair of array) {
      const threshold = pair[0];
      const value = pair[1];
      if (threshold <= propertyValue) { return value; }
    }
    return array[array.length - 1][1];
  }

}
