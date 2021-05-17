import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleRouterOutletsComponent } from './multiple-router-outlets/multiple-router-outlets.component';
import { CarsComponent } from './cars/cars.component';
import { PlanesComponent } from './planes/planes.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleRouterOutletsComponent,
    CarsComponent,
    PlanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
