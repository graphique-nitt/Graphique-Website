import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navs', {static: false}) namedElement: ElementRef;

  classvalue:string;
  constructor(private _router: Router) {}
cssvalue:string;
  ngOnInit(): void {
    this.cssvalue="navbar-toggler";

    if(this._router.url === '/home' || this._router.url === '/members' || this._router.url === '/projects' || this._router.url === '/workshops' || this._router.url === '/wallpapers' || this._router.url === '/contact')
    {
      this.classvalue = "fixed-top text-white"
    } 

    else{
      this.classvalue = "fixed-top"
    }

  }

  reset(){
    this.namedElement.nativeElement.click();


  }

}
