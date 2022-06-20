import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    /* Con reset establecemos los valores que se puedan, comparar las props de persona con miFormulario
    si se utilizaria setvalue, arrojaria un error por que en persona no tenemos la propiedad condiciones */
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    /* En los formularios reactivos podemos subscribirnos a los cambios del formulario
    de esta manera estara "escuchando" y reaccionara a los cambios
    tambien podriamos subscribirnos a un campo en particular:
    this.miFormulario.get('condiciones').valueChanges.subscribe((newValue) => console.log(newValue)); 
    */

    this.miFormulario.valueChanges.subscribe((form) => {
      delete form.condiciones;
      this.persona = form;
    });

    /*Otra forma de hacerlo:
    Utilizando la desestructuracion, se extraen las condiciones y utilizamos el resto de 
    parametros como rest*/

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      this.persona = rest;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };

    delete formValue.condiciones;

    this.persona = formValue;

    console.log(formValue);
  }
}
