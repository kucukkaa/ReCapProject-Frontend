import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { CarimageComponent } from './components/carimage/carimage.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CardtoComponent},
  {path:"cars", component:CardtoComponent},
  {path:"cars/color/:colorId", component:CardtoComponent},
  {path:"cars/brand/:brandId", component:CardtoComponent},
  {path:"cars/carimages/:carId", component:CarimageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
