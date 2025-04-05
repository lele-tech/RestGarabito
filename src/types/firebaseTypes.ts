//  Platillo
export type Platillo = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoria_id: string;
    imagen_url: string;
  };
  
  //  Categoría
  export type Categoria = {
    nombre: string;
  };
  
  //  Horario por fecha
  export type Horario = {
    fecha: string; // "YYYY-MM-DD"
    entrada: string; // "HH:mm"
    salida: string; // "HH:mm"
    horas_trabajadas: number;
    horas_extra: number;
  };
  
  //  Empleado
  export type Empleado = {
    nombre: string;
    cedula: string;
    puesto: string;
    salario: number;
    horarios: {
      [fecha_id: string]: Horario;
    };
  };
  
  //  Usuario
  export type Usuario = {
    nombre: string;
    correo: string;
    clave: string; // Hashed password
  };
  
  //  Inventario
  export type InventarioItem = {
    nombre: string;
    cantidad: number;
    proveedor?: string;
    fecha_vencimiento?: string; // Solo si aplica
  };
  