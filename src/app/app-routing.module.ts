import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/main-website/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { TeamComponent } from './components/main-website/team/team.component';
import { ProjectsComponent } from './components/main-website/projects/projects.component';
import { WorkshopsComponent } from './components/main-website/workshops/workshops.component';
import { WallpaperComponent } from './components/main-website/wallpaper/wallpaper.component';
import { ContactComponent } from './components/main-website/contact/contact.component';
import { MainWebsiteComponent } from './components/main-website/main-website.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { VerifyCertComponent } from './components/verify-cert/verify-cert.component';
import { VerifyCertDirectComponent } from './components/verify-cert-direct/verify-cert-direct.component';
import { RedirectForSamsungComponent } from './components/redirect-for-samsung/redirect-for-samsung.component';


const routes: Routes = [
  {path: '', component: MainWebsiteComponent, children: [
    {path: '', component: IntroComponent},
    {path: 'members', component: TeamComponent},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'workshops', component: WorkshopsComponent}, 
    {path: 'wallpapers', component: WallpaperComponent}, 
    {path: 'contact', component: ContactComponent},
    {path: 'contact/:id', component: ContactComponent},
    {path: 'verify', component: VerifyCertComponent},
    { path: 'verify/:certID', component: VerifyCertDirectComponent},
    {path: '404', component: ErrorPageComponent}
    ]},
    {path: 'r',  component: RedirectForSamsungComponent},
    {path: '**', redirectTo: '404'}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled'  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
