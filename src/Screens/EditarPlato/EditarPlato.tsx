import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Plato } from "../types/firebaseTypes";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
import Footer from "../../Components/Footer";

const EditarPlato = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.plato) {
        navigate("/");
        return null;
    }

    const { plato, id } = state;
    const [formData, setFormData] = useState<Plato>(plato);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = async () => {
        const ref = doc(db, "plato", id);
        await updateDoc(ref, formData);
        alert("Plato actualizado con éxito!");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-soft-sand p-8 font-sans text-espresso-brown mt-16">
            <h2 className="text-3xl font-Bold font-poppins mb-6 border-b-2 border-cocoa-bark pb-2">
                Editar plato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Formulario */}
                <div className="space-y-4 text-sm">
                    <div>
                        <label className="block mb-1 font-poppins  text-lg">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 border-cocoa-bark rounded-md focus:outline-none font-poppins "
                            placeholder="Nombre del plato"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-poppins text-lg">Descripción</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 border-cocoa-bark rounded-md focus:outline-none"
                            placeholder="There are many variations of passages..."
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-poppins text-lg">Tiempo de preparación</label>
                        <input
                            type="text"
                            name="tiempo_preparacion"
                            value={formData.tiempo_preparacion}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 border-cocoa-bark rounded-md focus:outline-none"
                            placeholder="15 minutos"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-poppins text-lg">Precio</label>
                        <input
                            type="text"
                            name="precio"
                            value={formData.precio}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 border-cocoa-bark rounded-md focus:outline-none font-poppins mb-12"
                            placeholder="¢0.000"
                        />
                    </div>


                    <div className="flex gap-4 mt-10 justify-center">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="px-10 py-2.5 text-base transition rounded-md font-poppins bg-deep-moss text-white hover:bg-earth-olive"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="px-10 py-2.5 text-base transition rounded-md font-poppins bg-deep-moss text-white hover:bg-earth-olive"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-center items-center w-full">
                    <div className="relative w-full max-w-xl aspect-square border-2 border-dashed border-cocoa-bark rounded-md p-2">
                        <img
                            src={formData.imagen_url}
                            alt="Plato"
                            className="w-full h-full object-cover rounded-md"
                        />
                        <span className="absolute top-2 right-3 text-2xl text-cocoa-bark cursor-pointer hover:text-espresso-brown">
                            ×
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarPlato;
