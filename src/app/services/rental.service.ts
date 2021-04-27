import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listReponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ="https://localhost:44355/api/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getrentalsbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

}
