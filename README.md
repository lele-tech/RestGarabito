# Documentacion de las Colecciones de la BD

- Ejemplo de la referencias en fire base.

```Typescript
import { getStorage, ref } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
```

```json
{
  "colecciones": {
    "platos": {
      "documento_id": {
        "nombre": "string",
        "descripcion": "string",
        "precio": "number",
        "tiempo_preparacion": "number",
        "categoria_ref": "reference(categorias)",
        "imagen_url": "string"
      }
    },
    "categorias": {
      "Platos": {
        "nombre": "Platos"
      },
      "Ensaladas": {
        "nombre": "Ensaladas"
      },
      "Pastas": {
        "nombre": "Pastas"
      },
      "Bebidas": {
        "nombre": "Bebidas"
      }
    },
    "usuarios": {
      "documento_id": {
        "nombre": "string",
        "correo": "string",
        "clave": "string (hashed)"
      }
    }
  }
}
```
# Fin de la documentacion de la BD