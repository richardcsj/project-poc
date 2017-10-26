import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { PropertyService } from './services/property.service';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertySearchComponent } from './property/property-search/property-search.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PropertyListComponent, PropertySearchComponent, PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
