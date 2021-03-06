import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';
import { MailService } from '../../../services/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  emailContacto:string;
  texto:string;
  textoDefecto = "Deja tus datos aquí";
  cargada = false;
  resultado:boolean;
  mostrarAlert = false;

  contactForm: FormGroup;
  submitted = false;
  enviandoMensaje = false;

  constructor(public _servicio:InfoPaginaService,
              public _mailService:MailService,
              private formBuilder: FormBuilder) {

    this.texto = this.textoDefecto;

    this._servicio.cargarData().then( ()=>{
      this.emailContacto = this._servicio.data.email;
      this.cargada = this._servicio.cargada;
    });

   }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mensaje: ['', Validators.required],
        });


  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
        this.ocultarAlert();
        this.submitted = true;
        this.enviandoMensaje = true;
        // Se detiene aquí si el formulario es invalido
        if (this.contactForm.invalid) {
          this.enviandoMensaje = false;
            return;
        }

        this._mailService.enviarMail(this.contactForm.value).then( ()=>{
        this.onReset(true);
        }).catch( ()=>{
        this.onReset(false);
      });

    }

    onReset(res) {
        this.resultado = res;
        this.enviandoMensaje = false;
        this.mostrarAlert = true;
        this.submitted = false;

        //Solo se resetea el form si la peticion ha ido bien
        if(res){
          this.contactForm.reset();
          this.texto = this.textoDefecto;
        }

        let contact_sec = document.getElementById("contact_sec");
        contact_sec.scrollIntoView();
    }

    ocultarAlert(){
      this.mostrarAlert = false;
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
