import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMayusculas: boolean = true): string {
    /* if (enMayusculas ) {
            return value.toLocaleLowerCase()
        } else {
            
            return value.toUpperCase();
        } */

    //Operador ternario
    return enMayusculas ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
