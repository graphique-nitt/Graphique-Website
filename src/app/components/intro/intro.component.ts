import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @HostListener('window:blur', ['$event'])
  onWindowBlur(event: any): void {
    console.log('iframe clicked');
  }
  entered=false;
  
  constructor(private _router: Router){}

  ngOnInit(): void {
  }
  toggleEnter(){
    console.log("Welcome :)")
    window.location.href="/home"
  }

}
