import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carImages:CarImage[] = [];
  dataLoaded = false;
  currentCarImage:CarImage;

  constructor(private carImageService:CarimageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesById(params["carId"])
      } else {
        this.getCarImages()
      }
    })
  }

  getCarImagesById(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=> {
      this.carImages=response.data
      this.dataLoaded=true
    })
  }

  setCurrentCar(carImage:CarImage){
    this.currentCarImage = carImage;
  }

  

}
