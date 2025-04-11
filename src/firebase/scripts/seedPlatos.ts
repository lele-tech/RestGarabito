import { collection, addDoc } from "firebase/firestore";
import db from "../config"; 
import samplePlatos from "../../Utils/sampleDishes";

export const seedPlatos = async () => {
  try {
    const platosRef = collection(db, "plato");

    for (const plato of samplePlatos) {
      await addDoc(platosRef, plato);
      console.log(`Plato agregado: ${plato.nombre}`);
    }

    console.log(" Todos los platos fueron agregados exitosamente.");
  } catch (error) {
    console.error(" Error al agregar platos:", error);
  }
};