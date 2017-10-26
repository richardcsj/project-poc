import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {
  
  type:string;
  owner:string;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  searchByOwner(){
  	this.router.navigate(['/property/owner',this.owner]);
  }

  searchByType() {
  	this.router.navigate(['/property/type',this.type]);
  }
  searchAll(){
    this.router.navigate(['/property/list']);
  }

}
