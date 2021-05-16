import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  carDtos:CarDto[] = [];
  filtredCarDtos:CarDto[] = [];
  theCarDtos:CarDto;
  dataLoaded = false;
  filterText="";
  currentCarDto:CarDto;
  carImages:CarImage[]=[];
  firstCarImage:CarImage;
  brands:Brand[] = [];
  colors:Color[]=[];
  brandName:String;
  colorId:number;

  constructor(private carDtoService:CardtoService,
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService, 
    private carImageService:CarimageService, 
    private brandService:BrandService, 
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDtosByBrandId(params["brandId"])
        
      }else if(params["colorId"]){
        this.getCarDtosByColorId(params["colorId"])
        
      }else {
        this.getCarDtos();   
      }
      this.getBrands();
      this.getColors();  
      
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

  getCarDtosByBrandId (brandId:number){
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

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded=true;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true
    })
  } 

  filterByColorAndBrand(colorId:number, brandName:String){
      this.carDtoService.getCarDtosByColorIdAndBrandName(colorId, brandName).subscribe(response=>{
      this.carDtos = response.data
      this.dataLoaded = true
    })
  }
    

}

