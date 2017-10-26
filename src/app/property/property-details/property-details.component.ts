import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../../services/property.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property:any;
  propertyId:string;
  constructor(private propertyService: PropertyService,private activatedRoute: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
			this.propertyId = params['propertyId'];
		});
	this.propertyService.findPropertyById(this.propertyId).subscribe(
			(property:any)=>{
				this.property = property;
				console.log(this.property);
			}
		)
  }

}
