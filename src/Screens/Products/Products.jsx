import { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Home_Title } from "../Home/Home_Components/Home_Title";
import { CardPlato } from "../../Components/Card_plato";
import { storage } from "../../firebase/auth"; // Importar storage
import { ref, getDownloadURL } from "firebase/storage"; // Importar funciones de Storage
import "./css/products.css";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Platos");
  const [currentPage, setCurrentPage] = useState(1);
  const [platos, setPlatos] = useState([]); // Estado para los platos
  const [loadingPlatos, setLoadingPlatos] = useState(true); // Estado de carga para platos
  const [categories, setCategories] = useState([]); // Estado para categorías, se cargarán desde Storage
  const [loadingCategories, setLoadingCategories] = useState(true); // Estado de carga para categorías
  const itemsPerPage = 8;

  // Obtener categorías desde Firebase Storage (categories.json)
  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const categoriesRef = ref(storage, 'menu/categories.json');
        const url = await getDownloadURL(categoriesRef);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categoriesData = await response.json(); // Asume que el JSON es un array de strings o de objetos {nombre: string}

        // Extraer solo los nombres si son objetos
        const categoryNames = categoriesData.map(cat => typeof cat === 'string' ? cat : cat.nombre);

        // Ordenar, asegurando que 'Platos' esté primero si existe
        const sortedCategories = categoryNames.sort((a, b) => {
            if (a === 'Platos') return -1;
            if (b === 'Platos') return 1;
            return a.localeCompare(b);
        });

        setCategories(sortedCategories);

        // Seleccionar la primera categoría ('Platos' si existe, o la primera alfabéticamente) si no hay una seleccionada
        // o si la seleccionada ya no existe
        if (!selectedCategory || !sortedCategories.includes(selectedCategory)) {
            setSelectedCategory(sortedCategories.length > 0 ? sortedCategories[0] : null);
        }

      } catch (error) {
        console.error("Error fetching categories from Storage: ", error);
        setCategories([]); // Limpiar categorías en caso de error
        setSelectedCategory(null);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []); // Ejecutar solo una vez al montar

  // Obtener platos desde Firebase Storage basados en la categoría seleccionada ([categoria].json)
  useEffect(() => {
    const fetchPlatos = async () => {
      if (!selectedCategory) {
        setPlatos([]);
        setLoadingPlatos(false);
        return; // No buscar si no hay categoría seleccionada
      }

      setLoadingPlatos(true);
      try {
        // Asume que los archivos de platos están en 'menu/data/[nombreCategoria].json'
        const storagePath = `menu/data/${selectedCategory}.json`; // Log the path
        console.log(`Attempting to fetch platos from: ${storagePath}`); // Log the path being requested
        const platoFileRef = ref(storage, storagePath);
        const url = await getDownloadURL(platoFileRef);
        console.log(`Successfully got download URL for ${selectedCategory}: ${url}`); // Log success URL retrieval
        const response = await fetch(url);
        console.log(`Fetch response status for ${selectedCategory}: ${response.status}`); // Log response status

        if (!response.ok) {
          // Si el archivo específico de la categoría no existe, podría ser un 404
          if (response.status === 404) {
            console.warn(`Platos file not found for category: ${selectedCategory} at path: ${storagePath}`);
            setPlatos([]); // No hay platos para esta categoría
          } else {
            console.error(`HTTP error fetching ${selectedCategory}! status: ${response.status}, path: ${storagePath}`);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const responseText = await response.text(); // Get response as text first for logging
          console.log(`Raw response text for ${selectedCategory}:`, responseText); // Log raw text
          try {
            const platoList = JSON.parse(responseText); // Parse the logged text
            console.log(`Successfully parsed platos for ${selectedCategory}:`, platoList);
            setPlatos(platoList);
          } catch (parseError) {
            console.error(`Error parsing JSON for ${selectedCategory} from path: ${storagePath}`, parseError);
            console.error("Raw text that failed to parse:", responseText);
            setPlatos([]); // Set empty on parse error
          }
        }
      } catch (error) {
        // Manejar errores específicos de Storage (ej. objeto no encontrado)
        console.error(`Caught error fetching platos for ${selectedCategory}:`, error); // Log the caught error object
        if (error.code === 'storage/object-not-found') {
             console.warn(`Storage object not found for category: ${selectedCategory} at path: menu/data/${selectedCategory}.json`);
             setPlatos([]);
        } else {
            console.error(`General error fetching platos for ${selectedCategory} from Storage: `, error);
            setPlatos([]); // Limpiar platos en caso de error general
        }
      } finally {
        setLoadingPlatos(false);
      }
    };

    fetchPlatos();
  }, [selectedCategory]); // Ejecutar cuando cambie la categoría seleccionada

  // Los datos ahora se cargan desde Firebase Storage.

  // Lógica de paginación actualizada para usar el estado 'platos'
  const items = platos;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-soft-sand">
      <Navbar />
      <div className="products-title">
        <Home_Title />
      </div>

      {/* Menú de categorías */}
      <div className="menu-categories w-full max-w-screen-xl mx-auto mt-12 px-4">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-3xl font-righteous text-cocoa-bark drop-shadow-md">Menú</h2>
          <div className="flex gap-6">
            {loadingCategories ? (
              <p className="text-gray-500">Cargando categorías...</p>
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1); // Reset page when category changes
                  }}
                  className={`font-righteous text-xl ${selectedCategory === category ? 'text-cocoa-bark active' : 'text-gray-400'} hover:text-cocoa-bark transition-colors drop-shadow-md`}
                >
                  {category}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No hay categorías disponibles.</p> // Mensaje si no hay categorías después de cargar
            )}
          </div>
        </div>

        {/* Grid de platos */}
        {loadingPlatos ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-cocoa-bark text-xl">Cargando platos...</p> {/* O un spinner */} 
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {currentItems.length > 0 ? (
                currentItems.map((plato) => (
                <CardPlato key={plato.id} plato={plato} />
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500">No hay platos disponibles en esta categoría.</p>
            )}
          </div>
        )}

        {/* Paginación */}
        {!loadingPlatos && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-16">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-cocoa-bark text-soft-sand rounded disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
            >
              Anterior
            </button>
            <span className="font-poppins text-cocoa-bark">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-cocoa-bark text-soft-sand rounded disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      <Footer theme="oscuro" />
    </div>
  );
}