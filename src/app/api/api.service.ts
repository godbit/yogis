import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YogiDetails, YogiDetailsHelper } from './yogi-details';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'sheets/';


const ACTIVITIES = 'activities/';
const YOGI_SERIES = 'yogiSeries/';
const YOGI_DETAILS = 'yogiDetails/';


@Injectable({
  providedIn: 'root'
})

export class ApiService { 
  yogiDetailsMap = new Map<string, YogiDetails>();

  constructor(private http: HttpClient) { }

  getActivites() {
    return this.http.get(API_URL + ACTIVITIES);
  }

  getYogiSeries(id: string) {
    return this.http.get(API_URL + YOGI_SERIES + id);
  }

  getYogiDetails(id: string): Observable<YogiDetails> {
    if (this.yogiDetailsMap.has(id)) {
      return of(this.yogiDetailsMap.get(id));
    }

    return this.http.get(API_URL + YOGI_DETAILS + id).pipe(
      map(resp => {
        const yogiDetails = YogiDetailsHelper.fromResponse(resp);
        this.yogiDetailsMap.set(id, yogiDetails);
        return yogiDetails;
      })
    );
  }

}
