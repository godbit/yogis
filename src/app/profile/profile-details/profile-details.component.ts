import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile-data.service';
import { ApiService } from 'src/app/api/api.service';
import { YogiDetails } from 'src/app/api/yogi-details';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() currentProfile: Profile;
  yogiDetails: YogiDetails;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getYogiDetails(this.currentProfile.key)
      .subscribe(response => this.yogiDetails = response);
    this.api.getYogiSeries(this.currentProfile.key)
      .subscribe(response => console.log('pass'));
  }

}
