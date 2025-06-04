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