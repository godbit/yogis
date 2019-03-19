import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile-data.service';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() currentProfile: Profile;
  score: number;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getYogiDetails(this.currentProfile.key)
      .subscribe(response => {
        // Temp test with hard coded 10
        // TODO: rewrite api to return better json
        this.score = response['values'][10];
      });
  }

}
