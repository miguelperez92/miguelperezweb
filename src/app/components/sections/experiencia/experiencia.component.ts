import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias:any[];
  cargada = false;

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.experiencias = this._servicio.data.experiencias;
      this.cargada = this._servicio.cargada;
    });

   }

  ngOnInit() {
  }

}
