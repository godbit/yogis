import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile-data.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() currentProfile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
