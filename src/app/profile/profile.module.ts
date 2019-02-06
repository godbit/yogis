import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileThumbComponent } from './profile-thumb/profile-thumb.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProfileContainerComponent, ProfilePictureComponent, ProfileThumbComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ProfileContainerComponent
  ]
})
export class ProfileModule { }
