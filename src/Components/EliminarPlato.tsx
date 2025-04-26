import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const eliminarPlato = async (id: string): Promise<void> => {
  try {

    await deleteDoc(doc(db, "Plato", id));
    console.log(`Plato con ID ${id} eliminado correctamente`);

  } catch (error) {

    console.error("Error al eliminar el plato:", error);
    throw error;

  }
};
