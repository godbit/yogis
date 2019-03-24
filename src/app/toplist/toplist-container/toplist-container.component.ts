import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/profile/profile-data.service';
import { ApiService } from 'src/app/api/api.service';
import { YogiDetails } from 'src/app/api/yogi-details';
import { Profile } from 'src/app/profile/profile';
import { Observable, zip } from 'rxjs';

@Component({
  selector: 'app-toplist-container',
  templateUrl: './toplist-container.component.html',
  styleUrls: ['./toplist-container.component.css']
})
export class ToplistContainerComponent implements OnInit {

  keys: string[] = [];
  pairList: [YogiDetails, Profile][] = [];

  constructor(private profileDataService: ProfileDataService,
    private api: ApiService) { }

  ngOnInit() {
    this.keys = this.profileDataService.getKeys();

    for (const key in this.keys) {
      if (!this.keys.hasOwnProperty(key)) {
        continue;
      }

      const details = this.getDetails(this.keys[key]);
      const profile = this.getProfile(this.keys[key]);
      this.combineObservables(details, profile);
    }
  }

  getDetails(key: string) {
    return this.api.getYogiDetails(key);
  }

  getProfile(key: string) {
    return this.profileDataService.getProfile(key);
  }

  combineObservables(details$: Observable<YogiDetails>, profile$: Observable<Profile>) {
    const combined = zip(details$, profile$);
    combined.subscribe((comb) => {
      this.updateArray(comb[0], comb[1]);
    });
  }

  updateArray(yogiDetails: YogiDetails, profile: Profile) {
    this.pairList = [
      ...this.pairList,
      [yogiDetails, profile]
    ];
    this.pairList.sort((a: [YogiDetails, Profile], b: [YogiDetails, Profile]) => {
      if (a[0].currentScore < b[0].currentScore) { return 1; }
      if (a[0].currentScore > b[0].currentScore) { return -1; }
      return 0;
    });
  }
}
