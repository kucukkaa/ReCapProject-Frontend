import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  apiUrl ="https://localhost:44355/api/"
  

  constructor(private httpClient:HttpClient) { }



  getCarDtos():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtosByBrandId(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtosByColorId(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtosByCarId(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}