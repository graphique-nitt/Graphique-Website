import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-website/header/header.component';
import { FooterComponent } from './components/main-website/footer/footer.component';
import { HomeComponent } from './components/main-website/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { TeamComponent } from './components/main-website/team/team.component';
import { ProjectsComponent } from './components/main-website/projects/projects.component';
import { WorkshopsComponent } from './components/main-website/workshops/workshops.component';
import { WallpaperComponent } from './components/main-website/wallpaper/wallpaper.component';
import { ContactComponent } from './components/main-website/contact/contact.component';
import {NgParticlesModule} from "ng-particles";
import { MainWebsiteComponent } from './components/main-website/main-website.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { VerifyCertComponent } from './components/verify-cert/verify-cert.component';

import { FormsModule } from '@angular/forms';
import { NetworkInterceptor } from './network.interceptor';


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
    ContactComponent,
    MainWebsiteComponent,
    ErrorPageComponent,
    VerifyCertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
    {
      provide: API_KEY,
      useValue: 'AIzaSyCgZkjIqiX_e3HYhV5u_x1GT56aXD46moI',
    },

    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
