import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/profile/profile-data.service';
import { ApiService } from 'src/app/api/api.service';
import { YogiDetails } from 'src/app/api/yogi-details';
import { Profile } from 'src/app/profile/profile';
import { Observable, zip, timer } from 'rxjs';
import { timeout, throttleTime, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-toplist-container',
  templateUrl: './toplist-container.component.html',
  styleUrls: ['./toplist-container.component.css']
})

export class ToplistContainerComponent implements OnInit {
  keys: string[] = [];
  pairList: [YogiDetails, Profile][] = [];
  loadingList: [Observable<[YogiDetails, Profile]>][] = [];

  constructor(private profileDataService: ProfileDataService,
    private api: ApiService) { }

  ngOnInit() {
    this.keys = this.profileDataService.getKeys();
    let i = 0;
    for (const key of this.keys) {
      i++;
      const details = this.getDetails(key);
      const profile = this.getProfile(key);
      setTimeout(() => this.combineObservables(details, profile), i * 100);
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
    // Add one item as loading
    this.loadingList = [
      ...this.loadingList,
      [combined]
    ];

    combined.subscribe((comb) => {
      this.updateArray(comb[0], comb[1]);
    });
  }

  updateArray(yogiDetails: YogiDetails, profile: Profile) {
    // Add one item as finished
    this.pairList = [
      ...this.pairList,
      [yogiDetails, profile]
    ];
    // Remove one item as loading
    this.loadingList.pop();
    // Sort list of loaded items, higher score on top
    this.pairList.sort((a: [YogiDetails, Profile], b: [YogiDetails, Profile]) => {
      if (a[0].currentScore < b[0].currentScore) { return 1; }
      if (a[0].currentScore > b[0].currentScore) { return -1; }
      return 0;
    });
  }
}
