import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const DATAPATH = '/api/data/';
const FILEFORMAT = 'json';

const MEMBERS = [
  'emil'
];

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  profiles: Profile[];
  data: any;

  constructor(private http: HttpClient) { }

  loadProfiles() {
    console.log('loadProfiles');
    for (const member in MEMBERS) {
      if (MEMBERS.hasOwnProperty(member)) {
        const obs = this.http.get(DATAPATH + MEMBERS[member] + '.' + FILEFORMAT);
        obs.subscribe((response) => this.handleResponse(response));
      }
    }
  }

  handleResponse(response) {
    console.log(response);
  }

}

class Profile {
  firstname: string;
  surname: string;
  nickname: string;

  traits: string[];
  description: string;
  achivements: string[];

  constructor(firstname: string) {
    this.firstname = firstname;
  }
}
