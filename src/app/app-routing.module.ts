import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileContainerComponent } from './profile/profile-container/profile-container.component';
import { ProfileThumbComponent } from './profile/profile-thumb/profile-thumb.component';
import { ProfilePictureComponent } from './profile/profile-picture/profile-picture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileContainerComponent
  },
  {
    path: 'thumb', component: ProfileThumbComponent
  },
  {
    path: 'pic', component: ProfilePictureComponent
  },
  {
    path: '', redirectTo: '/profile', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Avoid having to specify routing components in serveral locations by adding them to routingComponents.
// export const rountingComponents = [ProfileContainerComponent];
