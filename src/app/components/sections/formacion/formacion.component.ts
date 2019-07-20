import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  formaciones:any[];
  cargada = false;

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.formaciones = this._servicio.data.formaciones;
      this.cargada = this._servicio.cargada;
    });

   }

  ngOnInit() {
  }

}
