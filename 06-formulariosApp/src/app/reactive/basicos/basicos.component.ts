import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  /* Establecemos un valor para el form al comeenzar*/
  ngOnInit(): void {
    /* Para establecer valores al formulario si se usa setValue() explota en caso 
    de que no se establezcan todos los valores. Para ello se utiliza reset */
    this.miFormulario.reset({
      nombre: 'RTX 3080ti',
      precio: 1500,
    });
  }

  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(320),
    existencias: new FormControl(10),
  }); */

  /* Similar al formgroup, pero se utilizan array's, con la siguiente estructura 
  propiedad: [valor, validador sincrono, validador asincrono]
  validador sincrono: como ejecutar funciones de js, se ejecuta x ej cuando user pulsa tecla
      se puede usar un array de validadores https://angular.io/api/forms/Validators
  validadorr asincrono : como username y se consulta en bbdd si existe */
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]],
  });

  /* Form builder es un servicio, como tal, injectarlo */
  constructor(private fb: FormBuilder) {}

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
