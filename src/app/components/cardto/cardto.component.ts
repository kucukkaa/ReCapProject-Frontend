import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  carDtos:CarDto[] = [];
  theCarDtos:CarDto;
  dataLoaded = false;
  filterText="";
  currentCarDto:CarDto;
  carImages:CarImage[]=[];
  firstCarImage:CarImage;

  constructor(private carDtoService:CardtoService ,private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private carImageService:CarimageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDtosByBrandId(params["brandId"])
        
      }else if(params["colorId"]){
        this.getCarDtosByColorId(params["colorId"])
        
      }else {
        this.getCarDtos();
        
      }
    })
  }
      
  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response=>{
      this.carDtos = response.data
      this.dataLoaded = true
    })
  }

  getCarDtosByColorId(colorId:number){
    this.carDtoService.getCarDtosByColorId(colorId).subscribe(response=>{
      this.carDtos = response.data
      this.dataLoaded = true
    })
  }

  getCarDtosByBrandId(brandId:number){
    this.carDtoService.getCarDtosByBrandId(brandId).subscribe(response=>{
      this.carDtos = response.data
      this.dataLoaded = true
    })
  }

  addToCart(carDto:CarDto){
    this.toastrService.success("SEPETE EKLENDİ", carDto.brandName)
  }

  setCurrentCar(carDto:CarDto){
    this.currentCarDto = carDto;
    console.log(this.currentCarDto.carId) 
  }

  getCarImagesById(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }

  

}