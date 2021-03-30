import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from "ngx-toastr";
import { CarcardComponent } from './components/carcard/carcard.component';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import { FilterBycolorPipe } from './pipes/filter-bycolor.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';



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
    VatAddedPipe,
    FilterPipePipe,
    CarcardComponent,
    TrustUrlPipe,
    FilterBycolorPipe,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
