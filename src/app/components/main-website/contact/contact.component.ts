import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id="nope";
 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') !== null )
    this.id = this.route.snapshot.paramMap.get('id')
  }



 
  
}
