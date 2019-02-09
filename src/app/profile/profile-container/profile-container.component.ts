import { Component, OnInit } from '@angular/core';
import { ProfileDataService, Profile } from '../profile-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  currentProfile: Profile;
  _profileSubscription;

  constructor(private profileDataService: ProfileDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initSubscriptions();
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const name = params.get('name');
      this.profileDataService.setCurrentProfile(name);
    });
  }

  initSubscriptions() {
    this._profileSubscription = this.profileDataService.currentProfileChange.subscribe((profile: Profile) => {
        this.currentProfile = profile;
    });
  }

}
