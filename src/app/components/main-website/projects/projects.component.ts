import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Project, projectAttributesMapping } from './project.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
old: string;
  number: string;
  name: string;
  date: string;
  description: string;
  link: string;
  cover: string;
  proj: string;

    constructor(private googleSheetsDbService: GoogleSheetsDbService, private _router: Router) { }

  ngOnInit(): void {
    this.projects$ = this.googleSheetsDbService.getActive<Project>(
      '12C6fZMh6tU6fyU9mXaMrPZBV6lvZbBAIjDj-9kAU3tY', 'Details', projectAttributesMapping, 'Active');
  }

  red(){
  
      window.open(this.link, '_blank');

  }

  showSnack(link: string, project: string){
    this.link=link;
    this.proj=project;

     var x = document.getElementById("snackbar");

x.className = "show";

setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
  }
  

}
