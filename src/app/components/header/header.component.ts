import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classvalue:string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url === "/wallpapers")
    {
      this.classvalue = "fixed-top"
    } 

    else{
      this.classvalue = "fixed-top text-white"
    }
  }

}
