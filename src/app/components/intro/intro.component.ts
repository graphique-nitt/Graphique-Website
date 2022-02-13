import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  entered=false;
  
  constructor(private _router: Router){}

  ngOnInit(): void {
  }
  toggleEnter(){
    console.log("Welcome :)")
    this._router.navigate(['home']);

  }

}
