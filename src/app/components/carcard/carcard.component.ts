import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarcardService } from 'src/app/services/carcard.service';
import { CardtoComponent } from '../cardto/cardto.component';

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




  constructor(private carCardService:CarcardService) { }

  ngOnInit(): void {
    this.currentCar = 
    this.getCarImagesById(this.currentCar.carId)
    
  }
      
  getCarDtos(){
    this.carCardService.getCarDtos().subscribe(response=>{
      this.carDtos = response.data
      this.dataLoaded = true
    })
  }
  
  

    
  getCarImagesById(carId:number){
    this.carCardService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }



}
