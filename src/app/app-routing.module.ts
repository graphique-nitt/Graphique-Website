import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'team', component: TeamComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'workshops', component: WorkshopsComponent}, 
  {path: 'wallpapers', component: WallpaperComponent}, 
  {path: 'contact', component: ContactComponent}, 
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
