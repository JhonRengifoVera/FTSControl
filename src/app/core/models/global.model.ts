export interface Toast {
  titulo: string;
  mensaje: string;
  tipo: string;
}
export interface BreadCrumbItems {
  label: string,
  route: string | null;
}
export interface Items {
  name: string;
  route: string | null;
}

export interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

export interface Perfiles {
  nombre: string;
  codigo: string;
}

export interface Perfil {
  id: number;
  nombre: string;
  codigo: string;
}

export interface Permiso {
  id: number;
  nombre: string;
  rol: string;
  descripcion: string;
}

export interface ModalField {
  label: string;
  formControlName: string;
  enabled?: boolean;
}