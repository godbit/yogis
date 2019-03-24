import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './nav/nav.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ToplistModule } from './toplist/toplist.module';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    NavModule,
    ToplistModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
