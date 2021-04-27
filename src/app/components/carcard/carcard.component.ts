import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarcardService } from 'src/app/services/carcard.service';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  carDtos: CarDto[] = [];
  dataLoaded = false;
  rentalDataLoaded = false;
  currentCar: CarDto;
  carImages: CarImage[] = [];
  carImagePathTemp: string[] = [];
  abc: string[];
  index: number = 0;
  lastRental: Rental;
  rent_date: Date;
  return_date: Date;

  constructor(
    private carCardService: CarcardService,
    private carDtoService: CardtoService,
    private carImageService: CarimageService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDtosByCarId(params['carId']);
        this.getCarImagesById(params['carId']);
        this.getRentalsByCarId(params['carId']);
      }
    });
  }

  getCarImagesById(carId: number) {
    this.carImageService.getCarImagesById(carId).subscribe((response) => {
      this.carImages = response.data;
      if (this.carImages[0].imagePath != null) {
        this.dataLoaded = true;
      }
    });
  }

  getCarDtosByCarId(carId: number) {
    this.carDtoService.getCarDtosByCarId(carId).subscribe((response) => {
      this.carDtos = response.data;
      this.dataLoaded = true;
    });
  }

  getRentalsByCarId(carId: number) {
    this.rentalService.getRentalsByCarId(carId).subscribe((response) => {
      this.lastRental = response.data[response.data.length - 1];
      this.dataLoaded = true;
      this.rentalDataLoaded = true;
    });
  }

  // getRentButtonClassName() {
  //   if (this.rent_date <=  this.lastRental.returnDate || this.rent_date > this.return_date || this.lastRental.returnDate == null) {
  //     return "btn btn-primary disabled"
  //   } else {
  //     return "btn btn-primary"
  //   }
  // }

  getRentButtonClassName() {
    if (this.lastRental == null) {
      if (this.rent_date > this.return_date) {

        return "btn btn-primary disabled"
      } else {
        return "btn btn-primary"
      }
    } else {
      if (this.rent_date <= this.lastRental.returnDate || this.rent_date > this.return_date || this.lastRental.returnDate == null) {
        return "btn btn-primary disabled"
      } else {
        return "btn btn-primary"
      }
    }



  }
}
