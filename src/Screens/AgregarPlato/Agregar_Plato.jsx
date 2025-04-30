import Footer from '../../Components/Footer.jsx';
import FormularioPlato from '../../Components/FormularioPlato/FormularioPlato.jsx'
import { agregarPlato } from '../../services/platosService.js'; 

export function Agregar_Plato() {

  const handleAgregar = async (datosFormulario) => {
    try {
      const nuevoPlato = {
        nombre: datosFormulario.nombre,
        descripcion: datosFormulario.descripcion,
        precio: parseFloat(datosFormulario.precio.replace(/[₡¢$,\s]/g, '')),
        tiempo_preparacion: parseInt(datosFormulario.tiempo, 10),
        categoria: "Platos",
        imagen_url: "",
      };

      const idGenerado = await agregarPlato(nuevoPlato);
      console.log("Plato agregado con ID:", idGenerado);
      alert("Plato agregado exitosamente");

    } catch (error) {
      console.error("Error al agregar el plato:", error);
      alert("Hubo un error al agregar el plato.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-soft-sand">

      <div className='flex flex-col w-full mt-20 md:mt-24 xl:mt-28 2xl:mt-28 px-12 xl:px-20'>

        <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-5xl font-poppins">Agregar Plato</h1>

        <div className="border-b-2 xl:border-b-4 border-cocoa-bark w-full mx-auto relative mt-5 mb-12">
          <div className="bg-cocoa-bark w-2 h-2 xl:w-5 xl:h-5 absolute -left-1 -top-1 xl:-top-2 rotate-45"></div>
          <div className="bg-cocoa-bark w-2 h-2 xl:w-5 xl:h-5 absolute -right-1 -top-1 xl:-top-2 rotate-45"></div>
        </div>

        <p className="text-sm md:text-xl font-poppins text-left">Información del plato:</p>

      </div>

      <FormularioPlato onSubmit={handleAgregar}/>

      <Footer />
    </div>
  );
}
