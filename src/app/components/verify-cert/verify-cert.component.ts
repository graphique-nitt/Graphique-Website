import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  apiURL:any = "https://api.graphique.club/public/certificates"
  
  certDetails = []
  certificateImage : any = ''
  rollnumber = "";
  createdOn = "";
  certImageLoaded: boolean = false;
  //stateManagers
  isSearching = false;
  isFileDownloading = false;
  isCertificateValid = false;
  //
  searchParam:any = ""


  constructor(private route: ActivatedRoute, private httpclient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let date = params['certId'];
  });
    this.certID = this.route.snapshot.paramMap.get('certId'); 
    if(this.certID) this.verifyCertificate();
    else 
      this.preVerifyCertificate()      
    
  }
  preVerifyCertificate() {
  }
  verifyCertificate() {
    this.isSearching = true
    this.httpclient.get<any>(this.apiURL+"/getCertificateDetails/"+this.certID).subscribe(
      (res) => {
        this.isCertificateValid = true;
        this.isSearching= false;
        this.certDetails = res
        this.rollnumber = res.rollNumber;
        this.createdOn = res.createdOn
        this.certificateImage = this.apiURL+"/getCertificateFile/"+ res.certificateImage
       },      
      (err) => {
        this.isCertificateValid = false;
        this.isSearching= false;
      }
    );     
  }

  certImageLoadedHandler(){
    this.certImageLoaded = true;
  }

  download(){    
    this.isFileDownloading = true;
    this.httpclient.get<Blob>(this.apiURL+"/download/"+this.certID, {
      observe: 'response',
      responseType: 'blob' as 'json'
    }).subscribe(
      (res: HttpResponse<Blob>) => {
        FileSaver.saveAs(res.body, this.certID);
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
