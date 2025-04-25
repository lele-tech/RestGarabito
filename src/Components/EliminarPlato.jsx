// src/Components/EliminarPlato.jsx

import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const eliminarPlato = async (idPlato) => {
  try {
    await deleteDoc(doc(db, "plato", idPlato));
    console.log(`Plato con ID ${idPlato} eliminado correctamente`);
  } catch (error) {
    console.error("Error al eliminar el plato:", error);
    throw error;
  }
};
