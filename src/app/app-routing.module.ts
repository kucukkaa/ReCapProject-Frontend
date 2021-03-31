import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CarcardComponent } from './components/carcard/carcard.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CardtoComponent},
  {path:"cars", component:CardtoComponent},
  {path:"cars/color/:colorId", component:CardtoComponent},
  {path:"cars/brand/:brandId", component:CardtoComponent},
  {path:"cars/car/:carId", component:CarcardComponent},
  {path:"cars/carimages/:carId", component:CarimageComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
