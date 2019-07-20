
export interface InfoPagina{
  titulo?: string;
  autor?: string;
  email?: string;
  textoBoton?:string,
  facebook?: string;
  linkedin?: string;
  skills?: Skill[];
  formaciones?: Formacion[];
  experiencias?: Experiencia[];
  clientes?: Cliente[];
  secciones_nav?:any[];
  servicios?:any[];
}

export interface Skill {
    nombre?: string;
    valor?: string;
}

export interface Formacion {
  duracion?: string;
  lugar?: string;
  titulacion?: string;
}

export interface Experiencia{
  duracion?: string;
  titulo?: string;
  subtitulo?: string;
  descripcion?: string;
}

export interface Cliente {
  nombre?: string;
  img?: string;
  url?: string;
}
