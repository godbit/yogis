import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile, DATAPATH, DATAFORMAT } from './profile';
import { map } from 'rxjs/operators';
import { MEMBERS } from '../globals/constants';

@Injectable({
  providedIn: 'root'
})

export class ProfileDataService {
  profileMap = new Map<string, Profile>();

  constructor(private http: HttpClient) { }

  getProfile(id: string): Observable<Profile> {
    if (this.profileMap.has(id)) {
      return of(this.profileMap.get(id));
    }

    return this.http.get(DATAPATH + id + '.' + DATAFORMAT).pipe(
      map(response => {
        const profileData = response['profile'];
        const profile = Profile.fromResponse(profileData);
        this.profileMap.set(id, profile);
        return profile;
      })
    );
  }

  getKeys(): string[] {
    return MEMBERS;
  }
}

