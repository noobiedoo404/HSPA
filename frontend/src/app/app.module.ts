import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AlertifyService } from './services/alertify.service';

const appRoutes : Routes =[
  {path: '', component : PropertyListComponent},
  {path: 'rent-property', component : PropertyListComponent},
  {path: 'property-details/:id', component : PropertyDetailsComponent},
  {path: 'add-property', component : AddPropertyComponent},
  {path: 'user/register', component : UserRegisterComponent},
  {path: 'user/login', component : UserLoginComponent}
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    UserRegisterComponent,
    UserLoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HousingService, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
