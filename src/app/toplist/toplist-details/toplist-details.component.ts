import { Component, OnInit, Input } from '@angular/core';
import { YogiDetails } from 'src/app/api/yogi-details';
import { ATTENDANCE_COLOR_ARRAY } from 'src/app/globals/constants';

@Component({
  selector: 'app-toplist-details',
  templateUrl: './toplist-details.component.html',
  styleUrls: ['./toplist-details.component.css']
})
export class ToplistDetailsComponent implements OnInit {

  @Input() yogiDetails: YogiDetails;
  attendanceColor;

  constructor() { }

  ngOnInit() {
    this.getAttendanceColor();
  }

  getAttendanceColor() {
    for (const threshold of ATTENDANCE_COLOR_ARRAY) {
      if (threshold[0] <= this.yogiDetails.percent) {
        this.attendanceColor = threshold[1];
        console.log('found at ' + threshold[0] + ': ' + threshold[1]);
        return;
      }
    }
    this.attendanceColor = ATTENDANCE_COLOR_ARRAY[ATTENDANCE_COLOR_ARRAY.length - 1][1];
    console.log('last is ' + this.attendanceColor);
  }

}
