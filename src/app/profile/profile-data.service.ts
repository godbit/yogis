import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  /**
   * Requests json profile data from the server.
   */
  getProfile(name: string): Observable<object> {
    const obs = this.http.get(DATAPATH + name + '.' + DATAFORMAT);
    return obs;
  }

  getKeys(): string[] {
    return MEMBERS;
  }

  /**
   * Iterates through the json response and saves it as a Profile object.
   * @param response, the response.
   */
  asProfile(response): Profile {
    if (!response.hasOwnProperty('profile')) {
      return;
    }

    const profile = new Profile();
    const profileData = response.profile;

    profile.key = this.getSafeName(profileData.name);
    profile.name = profileData.name;
    profile.surname = profileData.surname;
    profile.nickname = profileData.nickname;
    profile.traits = profileData.traits;
    profile.description = profileData.description;
    profile.achivements = profileData.achivements;
    profile.imgUrl = this.getImgUrl(profile.key);

    return profile;
  }

  getImgUrl(key: string): string {
    return DATAPATH + key + '.' + IMGFORMAT;
  }

  private getSafeName(s: string) {
    s = s.toLowerCase();
    s = s.replace(/[áàäâãå]/, 'a');
    s = s.replace(/[óòöôõ]/, 'o');
    return s;
  }

}

export enum ProfileState {
  Void,
  Loading,
  Found,
  NotFound
}

export class Profile {
  key: string;
  name: string;
  surname: string;
  nickname: string;

  traits: string[];
  description: string[];
  achivements: string[];

  imgUrl: string;

  constructor() { }
}
