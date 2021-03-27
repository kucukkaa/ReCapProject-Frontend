import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentaldtoService } from 'src/app/services/rentaldto.service';

@Component({
  selector: 'app-rentaldto',
  templateUrl: './rentaldto.component.html',
  styleUrls: ['./rentaldto.component.css']
})
export class RentaldtoComponent implements OnInit {

  rentalDtos:RentalDto[] = [];
  dataLoaded = false;
  //rentalResponeseModel:RentalResponseModel = {data:this.rentals, message:"", success:true};
  constructor(private rentalService:RentaldtoService) { }

  ngOnInit(): void {
    this.getRentalDtos();
    
  }

  getRentalDtos(){
    this.rentalService.getRentalDtos().subscribe(response=>{
      this.rentalDtos = response.data
      this.dataLoaded = true;
    })
  }
}