import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YogiDetails } from './yogi-details';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YogiSeries } from './yogi-series';

const API_URL = 'sheets/';


const ACTIVITIES = 'activities/';
const YOGI_SERIES = 'yogiSeries/';
const YOGI_DETAILS = 'yogiDetails/';


@Injectable({
  providedIn: 'root'
})

export class ApiService { 
  yogiDetailsMap = new Map<string, YogiDetails>();
  yogiSeriesMap = new Map<string, YogiSeries>();

  constructor(private http: HttpClient) { }

  getActivites() {
    return this.http.get(API_URL + ACTIVITIES);
  }

  getYogiSeries(id: string): Observable<YogiSeries> {
    if (this.yogiSeriesMap.has(id)) {
      return of(this.yogiSeriesMap.get(id));
    }

    return this.http.get(API_URL + YOGI_SERIES + id).pipe(
      map(response => {
        const yogiSeries = YogiSeries.fromResponse(response);
        this.yogiSeriesMap.set(id, yogiSeries);
        return yogiSeries;
      })
    );
  }

  getYogiDetails(id: string): Observable<YogiDetails> {
    if (this.yogiDetailsMap.has(id)) {
      return of(this.yogiDetailsMap.get(id));
    }

    return this.http.get(API_URL + YOGI_DETAILS + id).pipe(
      map(response => {
        const yogiDetails = YogiDetails.fromResponse(response);
        this.yogiDetailsMap.set(id, yogiDetails);
        return yogiDetails;
      })
    );
  }

}
