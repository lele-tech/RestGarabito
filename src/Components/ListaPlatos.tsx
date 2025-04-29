import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase-config";
import { Plato } from "../types/firebaseTypes";
import CardPlato from "./Card_plato";

const ListaPlatos = () => {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const obtenerPlatos = async () => {
    try {
      const snapshot = await getDocs(collection(db, "plato"));

      console.log("Snapshot completo:", snapshot);
      console.log("Documentos recibidos:", snapshot.docs.length);

      const data: Plato[] = snapshot.docs
        .map((doc) => {
          try {
            const plato = doc.data();
            console.log("Datos del plato:", plato);
            return plato as Plato;
          } catch (err) {
            console.error("❌ Error al procesar documento:", doc.id, err);
            return null;
          }
        })
        .filter((plato): plato is Plato => plato !== null); // 👈 Aquí la magia

      if (data.length === 0) {
        setError("⚠️ No se encontraron platos en la base de datos.");
      } else {
        setPlatos(data);
      }
    } catch (e) {
      console.error("❌ Error al conectar con Firestore:", e);
      setError("❌ No se pudo conectar con la base de datos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPlatos();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap justify-center">
        {cargando && <p className="text-center mt-6">⏳ Cargando platos...</p>}
        {error && <p className="text-center mt-6 text-red-600">{error}</p>}
        {!cargando && !error && platos.length > 0 && (
          platos.map((plato, index) => (
            <CardPlato key={index} plato={plato} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaPlatos;


