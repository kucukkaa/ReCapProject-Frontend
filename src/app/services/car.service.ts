import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listReponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44355/api/"
  

  constructor(private httpClient:HttpClient) { }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}