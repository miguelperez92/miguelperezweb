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
  autor:string;
  constructor(public _servicio:InfoPaginaService) {

    this._servicio.cargarData().then( ()=>{
      this.facebook = this._servicio.data.facebook;
      this.linkedin = this._servicio.data.linkedin;
      this.autor = this._servicio.data.autor;
    });


  }

  ngOnInit() {
  }

}
