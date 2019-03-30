import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { YogiSeries } from '../api/yogi-series';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { COLORMAP } from '../globals/constants';

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
