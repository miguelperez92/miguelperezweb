import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios:any[];

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.servicios = this._servicio.data.servicios;
    });

   }

   crearDelay(i){

     let cadena:string = "0s";
     if(i > 0){
       cadena = "." + i + "s";
     }
     return cadena;
   }

  ngOnInit() {
  }

}
