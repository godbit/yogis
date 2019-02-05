import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const DATAPATH = '/api/data/';
const DATAFORMAT = 'json';
const IMGFORMAT = 'png';

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
  currentProfile: Profile;
  currentProfileChange: Subject<Profile> = new Subject<Profile>();

  constructor(private http: HttpClient) { }

  /**
   * Requests json profile data from the server.
   */
  loadProfiles() {
    for (const member in MEMBERS) {
      if (MEMBERS.hasOwnProperty(member)) {
        const obs = this.http.get(DATAPATH + MEMBERS[member] + '.' + DATAFORMAT);
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
    const profileData = response.profile;

    profile.name = profileData.name;
    profile.surname = profileData.surname;
    profile.nickname = profileData.nickname;
    profile.traits = profileData.traits;
    profile.description = profileData.description;
    profile.achivements = profileData.achivements;
    profile.imgUrl = this.genImgUrl(profile.name.toLowerCase());

    this.profiles.push(profile);
    this.updateCurrentProfile(profile);
  }

  genImgUrl(name: string): string {
    // TODO: Fix this to return img from server.
    // return DATAPATH + name + '.' + IMGFORMAT;
    return 'https://avatars2.githubusercontent.com/u/13339679?s=400&u=0836439808cb4fc0a24a49061e3f3edf65e9d722&v=4';
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  getCurrentProfile(): Profile {
    return this.currentProfile;
  }

  updateCurrentProfile(profile: Profile) {
    this.currentProfile = profile;
    this.currentProfileChange.next(this.currentProfile);
  }
}

export class Profile {
  name: string;
  surname: string;
  nickname: string;

  traits: string[];
  description: string;
  achivements: string[];

  imgUrl: string;

  constructor() { }
}
