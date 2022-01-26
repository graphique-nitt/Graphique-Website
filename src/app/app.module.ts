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
import { BaseComponent } from './components/base/base.component';
import { TeamComponent } from './components/team/team.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { HeaderSecondaryComponent } from './components/secondary/header-secondary/header-secondary.component';
import { FooterSecondaryComponent } from './components/secondary/footer-secondary/footer-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    BaseComponent,
    TeamComponent,
    SecondaryComponent,
    HeaderSecondaryComponent,
    FooterSecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
