import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { BaseComponent } from './components/base/base.component';
import { TeamComponent } from './components/team/team.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'home', component: BaseComponent},
  {path: '', component: SecondaryComponent, children: [
  {path: 'team', component: TeamComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'workshops', component: WorkshopsComponent}]},
  
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
