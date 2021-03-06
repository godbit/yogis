import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplistContainerComponent } from './toplist-container/toplist-container.component';
import { ToplistItemComponent } from './toplist-item/toplist-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ToplistDetailsComponent } from './toplist-details/toplist-details.component';
import { YogiChartsModule } from '../charts/yogi-charts.module';

@NgModule({
  declarations: [ToplistContainerComponent, ToplistItemComponent, ToplistDetailsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    YogiChartsModule
  ],
  exports: [
    ToplistContainerComponent
  ]
})
export class ToplistModule { }
