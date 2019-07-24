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
  cargada = false;

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.titulo = this._servicio.data.titulo;
      this.textoBoton = this._servicio.data.textoBoton;
      this.cargada = this._servicio.cargada;
    });

   }

  ngOnInit() {

  }

  ir_contacto(){
    let contact_sec = document.getElementById("contact_sec");
    contact_sec.scrollIntoView();
  }

}
