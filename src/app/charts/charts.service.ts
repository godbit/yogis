import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { YogiSeries } from '../api/yogi-series';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: Move these kind of maps to a central constants file.
const COLORMAP = new Map<string, string>();
COLORMAP.set('cissi',    '#f34213');
COLORMAP.set('emelia',   '#393d3f');
COLORMAP.set('emil',     '#177e89');
COLORMAP.set('fanny',    '#f94a8b');
COLORMAP.set('henry',    '#23ce6b');
COLORMAP.set('lanny',    '#ba82ff');

@Injectable({
  providedIn: 'root'
})

export class ChartsService {
  seriesMap = new Map<string, YogiSeries>();

  constructor(private api: ApiService) { }

  getData(id): Observable<YogiSeries> {
    if (this.seriesMap.has(id)) {
      return of(this.seriesMap.get(id));
    }

    return this.api.getYogiSeries(id).pipe(
      map(response => {
        this.seriesMap.set(id, response);
        return response;
      })
    );
  }

  getColor(id: string): string {
    return COLORMAP.get(id);
  }
}
