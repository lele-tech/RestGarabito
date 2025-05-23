export type Categoria = "Platos" | "Ensaladas" | "Pastas" | "Bebidas";

export type Plato = {
    nombre: string;
    descripcion: string;
    precio: number;
    tiempo_preparacion: number;
    categoria: Categoria;
    imagen_url: string;
};
export type Usuario = {
    correo: string;
    clave: string; 
};
  

