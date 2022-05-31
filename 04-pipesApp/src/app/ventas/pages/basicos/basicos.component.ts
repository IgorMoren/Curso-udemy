import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'igor';
  nombreUpper: string = 'IGOR';
  nombreCompleto: string = 'IgOR MoReNo';
 
  fecha: Date = new Date(); // el dia de hoy

}
