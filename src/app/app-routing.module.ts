import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileContainerComponent } from './profile/profile-container/profile-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileOverviewComponent } from './profile/profile-overview/profile-overview.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileOverviewComponent},
      { path: ':name', component: ProfileContainerComponent }
    ]
  },
  {
    path: '', component: HomeComponent
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
