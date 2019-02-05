import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const DATAPATH = '/api/data/';
const FILEFORMAT = 'json';

const MEMBERS = [
  'emil',
  'henry'
];

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  profiles: Profile[] = [];
  data: any;

  constructor(private http: HttpClient) { }

  /**
   * Requests json profile data from the server.
   */
  loadProfiles() {
    for (const member in MEMBERS) {
      if (MEMBERS.hasOwnProperty(member)) {
        const obs = this.http.get(DATAPATH + MEMBERS[member] + '.' + FILEFORMAT);
        obs.subscribe((response) => this.storeProfile(response));
      }
    }
  }

  /**
   * Iterates through the json response and saves it as a Profile object.
   * @param response, the response.
   */
  storeProfile(response) {
    if (!response.hasOwnProperty('profile')) {
      return;
    }

    const profile = new Profile();
    const profileData = response['profile'];
    for (const prop in profileData) {
      if (profileData.hasOwnProperty(prop)) {
        profile[prop] = profileData[prop];
      }
    }

    this.profiles.push(profile);
  }

}

class Profile {
  firstname: string;
  surname: string;
  nickname: string;

  traits: string[];
  description: string;
  achivements: string[];

  constructor() { }
}
