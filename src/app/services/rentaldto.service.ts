import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listReponseModel';
import { RentalDto } from '../models/rentalDto';


@Injectable({
  providedIn: 'root'
})
export class RentaldtoService {

  apiUrl ="https://localhost:44355/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalDtos():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);
  }
}