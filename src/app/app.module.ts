import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { RentaldtoComponent } from './components/rentaldto/rentaldto.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    CarimageComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    UserComponent,
    NaviComponent,
    CardtoComponent,
    RentaldtoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
