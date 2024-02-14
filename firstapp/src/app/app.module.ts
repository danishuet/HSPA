import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/Add-Property/Add-Property.component';
import { Routes, RouterModule } from '@angular/router';
import { RentPropertyComponent } from './property/Rent-Property/Rent-Property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';


const appRoutes: Routes = [
  { path: 'Add-Property', component: AddPropertyComponent },
  { path: 'Rent-Property', component: RentPropertyComponent },
    { path: 'property-detail/:id', component: PropertyDetailComponent },
   {path:'',component:PropertyListComponent}
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    RentPropertyComponent,
    PropertyDetailComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
