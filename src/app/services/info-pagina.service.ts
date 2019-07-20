import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  data:InfoPagina = {};
  cargada = false;

  constructor(private http:HttpClient) {}


  public cargarData() {

    return new Promise( (resolve, reject)=>{
      //Obtencion de los datos del JSON
      this.http.get('assets/data/data.json')
      .subscribe( (resp:InfoPagina)=>{
        this.data = resp;
        this.cargada = true;
        resolve();
      });

    });
  }

}
