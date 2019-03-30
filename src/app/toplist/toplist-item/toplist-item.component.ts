import { Component, OnInit, Input } from '@angular/core';
import { YogiDetails } from 'src/app/api/yogi-details';
import { ApiService } from 'src/app/api/api.service';
import { ProfileDataService } from 'src/app/profile/profile-data.service';
import { Profile } from 'src/app/profile/profile';
import { transition, trigger, animate, style, state, query, useAnimation } from '@angular/animations';
import { pulseAnimation, flipInAnimation } from 'src/app/globals/animations';

@Component({
  selector: 'app-toplist-item',
  templateUrl: './toplist-item.component.html',
  styleUrls: ['./toplist-item.component.css'],
  animations: [
    trigger('toplistAnimation', [
      transition(
        ':enter',
        useAnimation(flipInAnimation, {
          params: {
            time: '500ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            initialColor: 'var(--accent-light)',
            finalColor: 'unset',
            scale: 1.05
          }
        })
      )
    ])
  ]
})

export class ToplistItemComponent implements OnInit {

  @Input() yogiDetails: YogiDetails;
  @Input() profile: Profile;
  @Input() position: number;

  state;

  constructor(private api: ApiService,
              private profileDataService: ProfileDataService) { }

  ngOnInit() {  }
}
