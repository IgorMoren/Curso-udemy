import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Igor';
  genero: string ='masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Igor', 'fernando', 'Juancho', 'Rodolfo', 'Luisa', 'Juancho', 'Empstein', 'fernando', 'Juancho'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos #  clientes esperando'
  }

  cambiarCliente(){

    this.nombre = 'Alfreda';
    console.log(this.nombre);
    
    this.genero = 'femenino';
    console.log(this.genero);   

  }

  borrarCliente(){

    this.clientes.pop();

  }

  //Key value pipe

  persona = {
    nombre: 'igor',
    edad: '34',
    direccion: 'Iruña'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: 'vuela'
    },
    {
      nombre: 'Robin',
      vuela: 'no vuela'
    },
    {
      nombre: 'Aquaman',
      vuela: 'no vuela'
    },
  ]

  //Async Pipe

  miObservable = interval(1000); //0, 1, 2, 3, 4, 5, 6

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(()=>{
      resolve ( 'Tenemos data del promise');
    }, 3500);

  });


}
