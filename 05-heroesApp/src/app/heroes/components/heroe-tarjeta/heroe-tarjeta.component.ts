import { Heroe } from '../../interfaces/heroes.interface';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
  `

  ]
})
export class HeroeTarjetaComponent  {

  @Input() item!: Heroe; 

}
