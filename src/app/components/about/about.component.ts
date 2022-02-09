import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Project, projectAttributesMapping } from './project.model';

import { Character, characterAttributesMapping } from './character.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  characters$: Observable<Character[]>;
  projects$: Observable<Project[]>;

  
  name:string;
  about:string;
  designation:string;
  photo:string;
  instagram:string;
  behance:string;
  linkedin:string;
  website:string;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
   this.characters$ = this.googleSheetsDbService.getActive<Character>(
      '1sIzub8kRLv4vNbXhfJzC2HFl6BWYLLvvgnRcArPWhOw', 'Details', characterAttributesMapping, 'Active');
 
   this.projects$ = this.googleSheetsDbService.getActive<Project>(
    '12C6fZMh6tU6fyU9mXaMrPZBV6lvZbBAIjDj-9kAU3tY', 'Details', projectAttributesMapping, 'Active');
    console.log(this.projects$);
  }
}
