import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const DATAPATH = '/api/data/';
const DATAFORMAT = 'json';
const IMGFORMAT = 'jpg';

const MEMBERS = [
  'cissi',
  'emelia',
  'emil',
  'fanny',
  'henry',
  'lanny'
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
    name = this.getSafeName(name);
    return DATAPATH + name + '.' + IMGFORMAT;
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  getPropertyFromAllProfiles(propertyName: string) {
    const props = [];
    this.getProfiles().forEach(function (profile) {
      if (profile.hasOwnProperty(propertyName)) {
        props.push(profile[propertyName]);
      }
    });

    return props;
  }

  getProfileByName(name: string): Profile {
    let profile: Profile;
    this.getProfiles().forEach(function (prof): Profile {
      if (prof.name === name) {
        profile = prof;
        return;
      }
    });
    return profile;
  }

  getCurrentProfile(): Profile {
    return this.currentProfile;
  }

  setCurrentProfile(name: string) {
    const profile = this.getProfileByName(name);
    if (profile === null) {
      return;
    }
    this.updateCurrentProfile(profile);
  }

  updateCurrentProfile(profile: Profile) {
    this.currentProfile = profile;
    this.currentProfileChange.next(this.currentProfile);
  }

  private getSafeName(s: string) {
    s = s.replace(/[áàäâãå]/, 'a');
    s = s.replace(/[óòöôõ]/, 'o');
    return s;
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
