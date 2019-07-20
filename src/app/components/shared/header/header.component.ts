import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string;
  textoBoton:string;

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.titulo = this._servicio.data.titulo;
      this.textoBoton = this._servicio.data.textoBoton;
    });

   }

  ngOnInit() {

  }

}
