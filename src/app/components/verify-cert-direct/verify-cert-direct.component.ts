import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private route: ActivatedRoute, private httpclient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.certID = this.route.snapshot.paramMap.get('certID'); 
    console.log(this.route.snapshot.paramMap.get('certID'))
    console.log(this.certID)
    this.verifyCertificate();
  }
  
  verifyCertificate() {
    this.isSearching = true
    console.log("verify certificate called")
    this.httpclient.get<any>(this.apiURL+"/getCertificateDetails/"+this.certID).subscribe(
      (res) => {
        this.isCertificateValid = true;
        this.isSearching= false;
        console.log(res)
        this.certDetails = res
        this.rollnumber = res.rollNumber;
        this.createdOn = res.createdOn
        this.certificateImage = this.apiURL+"/getCertificateFile/"+ res.certificateImage
        console.log(this.certificateImage)
      },      
      (err) => {
        this.isCertificateValid = false;
        this.isSearching= false;
        console.log(err.error)
      }
    );     
  }

  certImageLoadedHandler(){
    console.log("imageLoaded")
    this.certImageLoaded = true;
  }

  download(){    
    this.isFileDownloading = true;
    this.httpclient.get<Blob>(this.apiURL+"/download/"+this.certID, {
      observe: 'response',
      responseType: 'blob' as 'json'
    }).subscribe(
      (res: HttpResponse<Blob>) => {
        console.log(res)
        FileSaver.saveAs(res.body, this.certID);
        this.isFileDownloading = false;
      },      
      (err) => {
        console.log(err.error)
      }
    ); 
  }

}