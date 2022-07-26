import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Certificate, certiAttributesMapping } from './certificate.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-verify-cert',
  templateUrl: './verify-cert.component.html',
  styleUrls: ['./verify-cert.component.css']
})
export class VerifyCertComponent implements OnInit {

  certID:any = ''
  
  certificateImage : any = ''
  rollnumber = "";
  certImageLoaded: boolean = false;
  //stateManagers
  isSearching = false;
  isFileDownloading = false;
  isCertificateValid = false;
  //
  searchParam:any = ""

  active = "no";
  certificateid="";
  name: string;
  certimage: string;
  certificates$: Observable<Certificate[]>;
  certificate: any;
  eventname:string;



  constructor(private route: ActivatedRoute, private httpclient: HttpClient, private router: Router, private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.googleSheetsDbService.getActive<Certificate>(
      '1C0UXdTKzVg1cvDZzoulxU1hcXDw_BGNdiMCHzE3Wg3M', 'Details', certiAttributesMapping, 'Active').toPromise().then(
        res => {
          this.certificate=res
        }
      );

      


    
  }
 
  verifyCertificate() {
  
      for (let i=0; i<this.certificate.length; i++)
      {
        if(this.certID===this.certificate[i].certificateid)
        {
          this.isCertificateValid = true;
          this.certificateImage = this.certificate[i].certimage;
          this.name = this.certificate[i].name;
          this.rollnumber = this.certificate[i].rollnumber;
          this.eventname = this.certificate[i].eventname;

          this.certImageLoadedHandler();


        }
      }
  }

  certImageLoadedHandler(){
    this.certImageLoaded = true;
  }

  download(){    
    this.isFileDownloading = true;
    this.httpclient.get<Blob>(this.certificateImage, {
      observe: 'response',
      responseType: 'blob' as 'json'
    }).subscribe(
      (res: HttpResponse<Blob>) => {
        FileSaver.saveAs(res.body, this.name + " - " +this.eventname);
        this.isFileDownloading = false;
       },      
      (err) => {
      }
    ); 
  }

  handleInputKeyUp(event:any){    
    this.searchParam = event.target.value
  }

  searchCertificateId(){
    this.certID = this.searchParam;
    this.verifyCertificate()
  }
  
}
