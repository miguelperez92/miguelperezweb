
export interface InfoPagina{
  titulo?: string;
  autor?: string;
  email?: string;
  textoBoton?:string,
  facebook?: string;
  linkedin?: string;
  pagina_softtek?: string;
  pagina_bbva?: string;
  skills?: Skill[];
  formaciones?: Formacion[];
  experiencias?: Experiencia[];
  clientes?: Cliente[];
  secciones_nav?:any[];
}

export interface Skill {
    nombre?: string;
    valor?: string;
}

export interface Formacion {
  rango?: string;
  lugar?: string;
  titulacion?: string;
}

export interface Experiencia{
  rango?: string;
  titulo?: string;
  subtitulo?: string;
  descripcion?: string;
}

export interface Cliente {
  nombre?: string;
  img?: string;
  url?: string;
}
