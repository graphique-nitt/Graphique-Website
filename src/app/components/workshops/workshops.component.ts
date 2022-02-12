import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Workshop, workshopAttributesMapping } from './workshops.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops$: Observable<Workshop[]>;

  id: string;
  creatorname: string;
  category: string;
  artwork: string;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.workshops$ = this.googleSheetsDbService.getActive<Workshop>(
      '1EeaFYXOzdOAskfpOGV0KZ-7DMr1-YI2ISJ-mEnvy05s', 'Chroma', workshopAttributesMapping, 'Active');
      console.log(this.workshops$);
  }

}
