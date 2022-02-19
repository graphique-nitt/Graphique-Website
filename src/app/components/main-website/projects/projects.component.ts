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
counter: number;
  number: string;
  name: string;
  date: string;
  description: string;
  link: string;
  cover: string;

    constructor(private googleSheetsDbService: GoogleSheetsDbService, private _router: Router) { }

  ngOnInit(): void {
    this.projects$ = this.googleSheetsDbService.getActive<Project>(
      '12C6fZMh6tU6fyU9mXaMrPZBV6lvZbBAIjDj-9kAU3tY', 'Details', projectAttributesMapping, 'Active');
      

  }

  red(link: string){
    const neww = link;
    if(neww == this.old)
    {
      this.old = "";
      window.open(link, '_blank');

    }

    else{
      this.old = neww;
    }
  }
  

}
