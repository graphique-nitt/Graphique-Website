import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Character, characterAttributesMapping } from './character.model';
import { Alumni, alumniAttributesMapping } from './Alumni.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  characters$: Observable<Character[]>;
  alumnis$: Observable<Character[]>;

  name:string;
  about:string;
  designation:string;
  photo:string;
  instagram:string;
  behance:string;
  linkedin:string;
  website:string;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }
displayModal = false;
showCurrent = true;
showAlumni = false;

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<Character>(
      '1sIzub8kRLv4vNbXhfJzC2HFl6BWYLLvvgnRcArPWhOw', 'Details', characterAttributesMapping, 'Active');
      this.alumnis$ = this.googleSheetsDbService.getActive<Character>(
        '1nZrhZsb7B0NP3pRP1I4EmsQdGKpQqoxBHbm5LkBGLcE', 'Details', alumniAttributesMapping, 'Active');
        console.log(this.alumnis$);
  }

  
    
  

  showModal(name:string, about:string, designation:string, photo:string, instagram:string, behance:string, linkedin:string, website:string){
    this.displayModal = true;
    this.name = name;
    this.about = about;
    this.designation = designation;
    this.photo = photo;
    this.instagram = instagram;
    this.behance = behance;
    this.linkedin = linkedin;
    this.website = website;
    
  }

  closeModal(){
    this.displayModal = false;
  }

  displayCurrent(){
    this.showCurrent=true;
    this.showAlumni=false;
  }

  displayAlumni(){
    this.showCurrent=false;
    this.showAlumni=true;
  }

}
