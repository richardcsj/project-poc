import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../../services/property.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:any[];
  owner:string;
  type:string;
  constructor(private propertyService: PropertyService,private activatedRoute: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
			this.owner = params['owner'];
			this.type = params['type'];
		}
	);
	if(this.owner!=undefined){
		this.propertyService.findPropertiesByOwner(this.owner).subscribe(
			(properties:any)=>{
				this.properties = properties;
			}
		);
  	}else if(this.type!=undefined){
		this.propertyService.findPropertiesByType(this.type).subscribe(
			(properties:any)=>{
				this.properties = properties;
			}
		);

	}else{
		this.propertyService.findAllProperties().subscribe(
			(properties:any)=>{
				this.properties = properties;
			}
		)
  	}

}

	

}
