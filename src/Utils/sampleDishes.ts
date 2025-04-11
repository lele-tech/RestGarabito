import { Plato } from "../types/firebaseTypes";

const samplePlatos: Plato[] = [
  {
    nombre: "Casado con Pollo",
    descripcion: "Arroz, frijoles, ensalada, plátano maduro y pollo en salsa.",
    precio: 3500,
    tiempo_preparacion: 15,
    categoria: "Platos",
    imagen_url: "https://res.cloudinary.com/demo/image/upload/v1/casado.jpg"
  },
  {
    nombre: "Spaghetti Alfredo",
    descripcion: "Pasta con salsa blanca cremosa y queso parmesano.",
    precio: 4200,
    tiempo_preparacion: 20,
    categoria: "Pastas",
    imagen_url: "https://res.cloudinary.com/demo/image/upload/v1/spaghetti.jpg"
  },
  {
    nombre: "Ensalada César",
    descripcion: "Lechuga, aderezo césar, pollo y crutones.",
    precio: 2800,
    tiempo_preparacion: 10,
    categoria: "Ensaladas",
    imagen_url: "https://res.cloudinary.com/demo/image/upload/v1/cesar.jpg"
  },
  {
    nombre: "Refresco Natural de Piña",
    descripcion: "Bebida refrescante 100% natural.",
    precio: 1200,
    tiempo_preparacion: 5,
    categoria: "Bebidas",
    imagen_url: "https://res.cloudinary.com/demo/image/upload/v1/pina.jpg"
  }
];

export default samplePlatos;