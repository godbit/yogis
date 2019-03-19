import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'sheets/';


const ACTIVITIES = 'activities/';
const YOGI_SERIES = 'yogiSeries/';
const DETAILS = 'details/';
const YOGI_DETAILS = 'yogiDetails/';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getActivites() {
    return this.http.get(API_URL + ACTIVITIES);
  }

  getDetails() {
    return this.http.get(API_URL + DETAILS);
  }

  getYogiSeries(id: string) {
    return this.http.get(API_URL + YOGI_SERIES + id);
  }

  getYogiDetails(id: string) {
    return this.http.get(API_URL + YOGI_DETAILS + id);
  }

}
