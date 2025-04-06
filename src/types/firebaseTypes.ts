export type CategoriaNombre = "Platos" | "Ensaladas" | "Pastas" | "Bebidas";

export type Plato = {
    nombre: string;
    descripcion: string;
    precio: number;
    tiempo_preparacion: number;
    categoria: CategoriaNombre;
    imagen_url: string;
};
  
export type Categoria = {
    nombre: "Platos" | "Ensaladas" | "Pastas" | "Bebidas";
};

export type Usuario = {
    nombre: string;
    correo: string;
    clave: string; // hash
};
  

