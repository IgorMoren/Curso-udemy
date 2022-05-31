import { ConfirmarComponent } from './../../components/confirmar/confirmar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Heroe, Publisher } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
`
img {
  width: 100%;
  border-radius: 5px;
}
`
  ],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog:MatDialog
  ) {}

  ngOnInit(): void {

    //Este clog nos devuelve un bool si en el path de la url se encuentra 'editar'
    //console.log(this.router.url.includes('editar'));
    //Si no nos encontramos en la ruta de editar, lanzmaos return para que no se ejecute el params etc etc y nos lanze error por que el id=undefined
    if ( !this.router.url.includes( 'editar' ) ) {
      return;
    }
    

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id!)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe( this.heroe )
        .subscribe ( heroe => this.mostrarSnackbar('Registro actualizado')
        )
    } else {

      this.heroesService.agregarHeroe( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar('Registro creado');
        });
          
        } 

    }
    borrarHeroe(){

      const dialog = this.dialog.open(ConfirmarComponent, {
        width: '250px',
        data:  this.heroe
      });

      dialog.afterClosed().subscribe(
        (result) => {
          if (result) {
            
            this.heroesService.borrarHeroe(this.heroe.id!)
            .subscribe(resp => {
      
              this.router.navigate(['/heroes'])
      
            }); 

          }
        }
        
      );

      
    }

    mostrarSnackbar( mensaje: string ) {

      this.snackBar.open(mensaje, 'Ok!', {
        duration: 2500 
      });

    }

  }

