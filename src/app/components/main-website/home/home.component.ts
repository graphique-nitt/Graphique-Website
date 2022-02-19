import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Project, projectAttributesMapping } from './project.model';
import { Router } from '@angular/router';

import { Character, characterAttributesMapping } from './character.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  characters$: Observable<Character[]>;
  projects$: Observable<Project[]>;
  entered=false;

  
  name:string;
  about:string;
  designation:string;
  photo:string;
  instagram:string;
  behance:string;
  linkedin:string;
  website:string;

  constructor(private googleSheetsDbService: GoogleSheetsDbService, private _router: Router) { }

  ngOnInit(): void {
   this.characters$ = this.googleSheetsDbService.getActive<Character>(
      '1sIzub8kRLv4vNbXhfJzC2HFl6BWYLLvvgnRcArPWhOw', 'Details', characterAttributesMapping, 'Active');
 
   this.projects$ = this.googleSheetsDbService.getActive<Project>(
    '12C6fZMh6tU6fyU9mXaMrPZBV6lvZbBAIjDj-9kAU3tY', 'Details', projectAttributesMapping, 'Active');
  }
  toggleEnter(){
    this._router.navigate(['home']);

  }


}
