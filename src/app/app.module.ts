import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroPageComponent } from './components/sections/intro/intro.component';
import { ServicesPageComponent } from './components/sections/services/services.component';
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
    IntroPageComponent,
    ServicesPageComponent,
    SkillsComponent,
    FormacionComponent,
    ExperienciaComponent,
    ClientesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
