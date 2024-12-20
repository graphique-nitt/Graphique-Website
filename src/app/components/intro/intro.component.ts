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
  }
  entered=false;
  
  constructor(private _router: Router){}

  ngOnInit(): void {
  }
  toggleEnter(){
    this._router.navigate(['home']);  }

}
