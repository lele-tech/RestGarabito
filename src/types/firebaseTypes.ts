import { Timestamp } from "firebase/firestore"; 

export type CategoriaNombre = "Platos" | "Ensaladas" | "Pastas" | "Bebidas";

export type Plato = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: CategoriaNombre;
    imagen_url: string;
};
  
export type Categoria = {
    nombre: "Platos" | "Ensaladas" | "Pastas" | "Bebidas";
};
  
export type Horario = {
    fecha: Timestamp; 
    entrada: string; // formato: HH:mm
    salida: string; // formato: HH:mm
    horas_trabajadas: number;
    horas_extra: number;
};

export type Usuario = {
    nombre: string;
    correo: string;
    clave: string; // hash
};
  
export type Inventario = {
    nombre: string;
    cantidad: number;
    proveedor?: string;
    fecha_vencimiento?: Timestamp; 
};
