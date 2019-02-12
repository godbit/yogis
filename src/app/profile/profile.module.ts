import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { MatIconModule } from '@angular/material/icon';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileThumbComponent } from './profile-thumb/profile-thumb.component';

@NgModule({
  declarations: [ProfileContainerComponent,
    ProfileDetailsComponent,
    ProfileOverviewComponent,
    ProfileThumbComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    ProfileContainerComponent
  ]
})
export class ProfileModule { }
