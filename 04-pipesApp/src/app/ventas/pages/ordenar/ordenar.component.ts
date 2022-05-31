import { Color, Heroe } from './../../interfaces/ventas.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  mayusculas: boolean = true;

  ordenarPor: string = 'nombre';
  
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },

    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  swapMayus() {
    this.mayusculas = !this.mayusculas;
    console.log(this.mayusculas);
  }

  cambiarOrden( valor: string) {

    this.ordenarPor = valor;

    console.log(valor);
    

  }

}
