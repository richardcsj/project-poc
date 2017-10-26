import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertySearchComponent } from './property/property-search/property-search.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

// Import all other components here
const APP_ROUTES : Routes = [
  { path : 'property/search', component: PropertySearchComponent},
  { path : 'property/list', component: PropertyListComponent},
  { path : 'property/owner/:owner', component: PropertyListComponent},
  { path : 'property/type/:type', component: PropertyListComponent},
  { path : 'property/:propertyId', component: PropertyDetailsComponent}
  
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
