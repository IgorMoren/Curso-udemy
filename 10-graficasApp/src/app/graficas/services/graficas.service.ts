import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuariosRedesSociales() {

    return this.http.get('http://localhost:3000/grafica');

  }

  getUsuariosRedesSocialesDona() {
    return this.getUsuariosRedesSociales()
      .pipe(
        map( data => {
          const labels = Object.keys(data);
          const values: any = Object.values(data);
          return { labels, values}
        } )
      )
  }

}
