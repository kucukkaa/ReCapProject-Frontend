import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  carDtos:CarDto[] = [];
  dataLoaded = false;

  constructor(private carDtoService:CardtoService ,private activatedRoute:ActivatedRoute, private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDtosByBrandId(params["brandId"])
      }else if (params["colorId"]) {
        this.getCarDtosByColorId(params["colorId"])
      } else {
        this.getCarDtos()  
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

}