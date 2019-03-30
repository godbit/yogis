import { Component, OnInit, Input } from '@angular/core';
import { YogiDetails } from 'src/app/api/yogi-details';

@Component({
  selector: 'app-toplist-details',
  templateUrl: './toplist-details.component.html',
  styleUrls: ['./toplist-details.component.css']
})
export class ToplistDetailsComponent implements OnInit {

  @Input() yogiDetails: YogiDetails;

  constructor() { }

  ngOnInit() {
  }

}
