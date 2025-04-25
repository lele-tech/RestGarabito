// src/Components/EliminarPlato.jsx

import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

/**
 * Función para eliminar un plato desde Firestore
 * @param {string} idPlato - ID del plato a eliminar
 * @returns {Promise<void>}
 */
export const eliminarPlato = async (idPlato) => {
  try {
    await deleteDoc(doc(db, "platos", idPlato));
    console.log(`Plato con ID ${idPlato} eliminado correctamente`);
  } catch (error) {
    console.error("Error al eliminar el plato:", error);
    throw error;
  }
};
