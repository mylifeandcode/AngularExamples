import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { MultipleRouterOutletsComponent } from './multiple-router-outlets/multiple-router-outlets.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
  {
    path: 'multiple-router-outlets', 
    component: MultipleRouterOutletsComponent
  },
  {
    path: 'cars', 
    component: CarsComponent, 
    outlet: 'child'
  }, 
  {
    path: 'planes', 
    component: PlanesComponent, 
    outlet: 'child'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
