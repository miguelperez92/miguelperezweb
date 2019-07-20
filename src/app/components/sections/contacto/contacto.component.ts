import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  email:string;
  texto:string;
  textoDefecto = "Estamos en contacto";
  cargada = false;

  constructor(public _servicio:InfoPaginaService) {

    this.texto = this.textoDefecto;

    this._servicio.cargarData().then( ()=>{
      this.email = this._servicio.data.email;
      this.cargada = this._servicio.cargada;
    });

   }

  ngOnInit() {
  }

  setTexto(texto:string){
    if(texto != null && texto.length > 0){
      this.texto = "Hola " + texto + ", te responderé a la mayor brevedad.";
    }else{
      this.texto = this.textoDefecto;
    }

    return texto;
  }


}
