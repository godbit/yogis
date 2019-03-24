import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { YogiDetails } from 'src/app/api/yogi-details';
import { Profile } from '../../profile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() profile: Profile;
  yogiDetails: YogiDetails;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getYogiDetails(this.profile.key)
      .subscribe(response => this.yogiDetails = response);
    this.api.getYogiSeries(this.profile.key)
      .subscribe(response => console.log('pass'));
  }

}
