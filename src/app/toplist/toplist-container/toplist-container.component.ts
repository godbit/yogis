import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/profile/profile-data.service';

@Component({
  selector: 'app-toplist-container',
  templateUrl: './toplist-container.component.html',
  styleUrls: ['./toplist-container.component.css']
})
export class ToplistContainerComponent implements OnInit {

  keys: string[] = [];

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.keys = this.profileDataService.getKeys();
  }

}
