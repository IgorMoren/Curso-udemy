import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

//Para que se lanze siempre el pipe hay que poner en false el atributo pure
@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if ( !heroe.id && !heroe.alt_img ) {

      return 'assets/no-image.png'; 

    } else if (heroe.alt_img ) {

      return heroe.alt_img;

    } else {
      
      return `assets/heroes/${heroe.id}.jpg`;

    }

  }

}
