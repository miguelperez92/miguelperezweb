import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number = new Date().getFullYear();
  facebook:string;
  linkedin:string;
  github:string;
  autor:string;
  cargada = false;

  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.facebook = this._servicio.data.facebook;
      this.linkedin = this._servicio.data.linkedin;
      this.github = this._servicio.data.github;
      this.autor = this._servicio.data.autor;
      this.cargada = this._servicio.cargada;
    });


  }

  ngOnInit() {
  }

}
