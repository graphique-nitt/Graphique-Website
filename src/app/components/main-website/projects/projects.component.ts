import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Project, projectAttributesMapping } from './project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  number: string;
  name: string;
  date: string;
  description: string;
  link: string;
  cover: string;

    constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.projects$ = this.googleSheetsDbService.getActive<Project>(
      '12C6fZMh6tU6fyU9mXaMrPZBV6lvZbBAIjDj-9kAU3tY', 'Details', projectAttributesMapping, 'Active');
      

  }
  

}
