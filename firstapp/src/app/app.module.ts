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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: 'Add-Property', component: AddPropertyComponent },
  { path: 'Rent-Property', component: RentPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '**', component: PropertyListComponent },
  //  {path:'',component:PropertyListComponent}
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    RentPropertyComponent,
    PropertyDetailComponent,
      NavBarComponent,
      UserLoginComponent,
    UserRegisterComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
     RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
     
  ],
  providers: [
    HousingService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
