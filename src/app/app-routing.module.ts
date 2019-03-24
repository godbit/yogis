import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ToplistContainerComponent } from './toplist/toplist-container/toplist-container.component';
import { ProfileOverviewComponent } from './profile/overview/profile-overview/profile-overview.component';
import { ProfileContainerComponent } from './profile/individual/profile-container/profile-container.component';
import { TimeScoreComponent } from './charts/time-score/time-score.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileOverviewComponent},
      { path: ':name', component: ProfileContainerComponent }
    ]
  },
  {
    path: 'toplist', component: ToplistContainerComponent
  },
  {
    path: 'timescore', component: TimeScoreComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
