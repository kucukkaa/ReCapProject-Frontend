import { Pipe, PipeTransform } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { merge } from 'rxjs';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterText:string): CarDto[] {
    
      filterText =filterText? filterText.toLocaleLowerCase():""
      let forBrand = filterText? value.filter((c:CarDto)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value ;
      let forColor = filterText? value.filter((c:CarDto)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value ;
      return forBrand.concat(forColor);
    
  }

}
