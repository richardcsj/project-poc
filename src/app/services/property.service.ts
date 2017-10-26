import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class PropertyService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  findPropertiesByOwner(owner:string){
  	return this._http.get(this.baseUrl + '/api/property/owner/'+owner)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findPropertiesByType(type:string){
  	return this._http.get(this.baseUrl + '/api/property/type/'+type)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findAllProperties(){
  	return this._http.get(this.baseUrl + '/api/property')
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }
  findPropertyById(propertyId:string){
  	return this._http.get(this.baseUrl + '/api/property/'+propertyId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}
