import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Certificate, certiAttributesMapping } from './certificate.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-verify-cert-direct',
  templateUrl: './verify-cert-direct.component.html',
  styleUrls: ['./verify-cert-direct.component.css']
})
export class VerifyCertDirectComponent implements OnInit{

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

  async ngOnInit(): Promise<void> {
    this.certID = this.route.snapshot.paramMap.get('certID'); 
    await this.googleSheetsDbService.getActive<Certificate>(
      '1C0UXdTKzVg1cvDZzoulxU1hcXDw_BGNdiMCHzE3Wg3M', 'Details', certiAttributesMapping, 'Active').toPromise().then(
        res => {
          this.certificate=res
        }
      );
    this.verifyCertificate();
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
    console.log("imageLoaded")
    this.certImageLoaded = true;
  }

  download(){    
    this.isFileDownloading = true;
    this.httpclient.get<Blob>(this.certificateImage, {
      observe: 'response',
      responseType: 'blob' as 'json'
    }).subscribe(
      (res: HttpResponse<Blob>) => {
        console.log(res)
        FileSaver.saveAs(res.body, this.name + " - " +this.eventname);
        this.isFileDownloading = false;
      },      
      (err) => {
        console.log(err.error)
      }
    ); 
  }

}