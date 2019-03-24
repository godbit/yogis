import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  keys: string[] = [];

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.keys = this.profileDataService.getKeys();
  }

}
