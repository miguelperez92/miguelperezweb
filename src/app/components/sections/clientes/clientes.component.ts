import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

clientes:any[];
cargada = false;

  constructor(public _servicio:InfoPaginaService) {
    this._servicio.cargarData().then( ()=>{
      this.clientes = this._servicio.data.clientes;
      this.cargada = this._servicio.cargada;
    });
  }

  ngOnInit() {
  }

}
