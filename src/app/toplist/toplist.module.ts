import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplistContainerComponent } from './toplist-container/toplist-container.component';
import { ToplistItemComponent } from './toplist-item/toplist-item.component';

@NgModule({
  declarations: [ToplistContainerComponent, ToplistItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ToplistContainerComponent
  ]
})
export class ToplistModule { }
