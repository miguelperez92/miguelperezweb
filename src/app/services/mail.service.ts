import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Formulario } from '../interfaces/formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http: HttpClient) { }

  enviarMail(form:Formulario){

    return new Promise( (resolve, reject)=>{
      this._http.post('https://miguelperezweb.herokuapp.com/contactar', JSON.stringify(form), {observe: 'response'})
      .subscribe(response => {
        if(response != null && response.status == 200){
          resolve();
        }else{
          reject();
        }
      });
    });

  }

}
