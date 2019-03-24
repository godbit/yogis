import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { YogiSeries } from '../api/yogi-series';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const COLORMAP = new Map<string, string>();
COLORMAP.set('cissi', '#3e95cd');
COLORMAP.set('emelia', '#8e5ea2');
COLORMAP.set('emil', '#3cba9f');
COLORMAP.set('fanny', '#e8c3b9');
COLORMAP.set('henry', '#c45850');
COLORMAP.set('lanny', '#c65a50');

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
