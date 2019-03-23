import { Component, OnInit, Input } from '@angular/core';
import { YogiDetails } from 'src/app/api/yogi-details';
import { ApiService } from 'src/app/api/api.service';
import { ProfileDataService } from 'src/app/profile/profile-data.service';

@Component({
  selector: 'app-toplist-item',
  templateUrl: './toplist-item.component.html',
  styleUrls: ['./toplist-item.component.css']
})
export class ToplistItemComponent implements OnInit {

  @Input() key: string;
  yogiDetails: YogiDetails;

  constructor(private api: ApiService,
              private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.api.getYogiDetails(this.key)
      .subscribe(response => this.yogiDetails = response);
  }
}
