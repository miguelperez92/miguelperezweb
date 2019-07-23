import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Paginas
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroComponent } from './components/sections/intro/intro.component';
import { ServiciosComponent } from './components/sections/servicios/servicios.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { FormacionComponent } from './components/sections/formacion/formacion.component';
import { ExperienciaComponent } from './components/sections/experiencia/experiencia.component';
import { ClientesComponent } from './components/sections/clientes/clientes.component';
import { ContactoComponent } from './components/sections/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    IntroComponent,
    ServiciosComponent,
    SkillsComponent,
    FormacionComponent,
    ExperienciaComponent,
    ClientesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
