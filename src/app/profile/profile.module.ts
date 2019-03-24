import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileContainerComponent } from './individual/profile-container/profile-container.component';
import { ProfileDetailsComponent } from './individual/profile-details/profile-details.component';
import { ProfileOverviewComponent } from './overview/profile-overview/profile-overview.component';
import { ProfileThumbComponent } from './overview/profile-thumb/profile-thumb.component';

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
