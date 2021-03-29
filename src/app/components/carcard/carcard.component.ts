import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarcardService } from 'src/app/services/carcard.service';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarimageService } from 'src/app/services/carimage.service';


@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css']
})
export class CarcardComponent implements OnInit {

  carDtos:CarDto[]=[];
  dataLoaded = false;
  currentCar:CarDto;
  carImages:CarImage[]=[]
  carImagePathTemp:string[]=[]
  abc:string[]




  constructor(private carCardService:CarcardService, private carDtoService:CardtoService, private carImageService:CarimageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesById(params["carId"]);
        this.getCarDtosByCarId(params["carId"]);
      }
  })
}
  
  getCarImagesById(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data
      if(this.carImages[0].imagePath != null){
        this.dataLoaded = true;
      }    
    })
  }

  getCarDtosByCarId(carId:number){
    this.carDtoService.getCarDtosByCarId(carId).subscribe(response=>{
      this.carDtos = response.data;
      this.dataLoaded=true;
      console.log("geldi2")
    })
  }





}
