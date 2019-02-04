import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileContainerComponent } from './profile-container/profile-container.component';

@NgModule({
  declarations: [ProfileContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileContainerComponent
  ]
})
export class ProfileModule { }
