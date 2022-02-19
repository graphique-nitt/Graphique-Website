import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id="nope";
name:string;
  constructor(private route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') !== null )
    this.id = this.route.snapshot.paramMap.get('id')
  }


onSubmit(){
this.id = 'submitted'

}

 
  
}
