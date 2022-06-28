import { Pais, PaisSmall } from './../../interfaces/paises.interface';
import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });

  //Selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: string[] = [];

  //UI
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private paisesServices: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    // Cuando cambie la region
    /* this.miFormulario.get('region')?.valueChanges.subscribe((region) => {
      console.log(region);
      this.paisesServices.getPaisesPorRegion(region).subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      });
    });*/
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
        }),
        switchMap((region) => this.paisesServices.getPaisesPorRegion(region))
      )

      .subscribe((paises) => {
        this.paises = paises;
      });

    //cuando cambie el pais
    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
          this.fronteras = [];
          this.miFormulario.get('frontera')?.reset('');
        }),
        switchMap((codigo) => this.paisesServices.getPaisPorCodigo(codigo))
      )
      .subscribe((pais) => {
        this.fronteras = pais[0]?.borders;
      });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
