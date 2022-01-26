import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  entered=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleEnter(){
    console.log("toggleEnter Triggered")
    this.entered=true;
  }

}
