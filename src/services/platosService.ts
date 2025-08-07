import { db } from "../Firebase/Firebase-config";
import { collection, addDoc } from "firebase/firestore"; 
import { Plato } from "../types/firebaseTypes"; 

export const agregarPlato = async (plato: Plato) => {
  try {
    const docRef = await addDoc(collection(db, "plato"), plato);
    console.log("Plato agregado con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("❌ Error al agregar el plato:", error);
    throw error;
  }
};
