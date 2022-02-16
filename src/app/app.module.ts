import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { ContactComponent } from './components/contact/contact.component';
import {NgParticlesModule} from "ng-particles";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    TeamComponent,
    ProjectsComponent,
    WorkshopsComponent,
    WallpaperComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule 
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: 'AIzaSyCgZkjIqiX_e3HYhV5u_x1GT56aXD46moI',
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
