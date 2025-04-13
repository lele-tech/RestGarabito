import { Button } from "../../../Components/Buttons";
import { useState, useEffect } from "react";
import ImageUploader from "../../../Components/ImageUploader";
import { saveHomeImage, getHomeImage, isUserAuthenticated } from "../../../Utils/ImageStorage";

export function Home_Discover() {
  const [imageAvailable, setImageAvailable] = useState(false);
  const [homeImage, setHomeImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Verificar si el usuario está autenticado
    setIsAuthenticated(isUserAuthenticated());
    
    // Cargar la imagen guardada si existe
    const savedImage = getHomeImage();
    if (savedImage) {
      setHomeImage(savedImage);
      setImageAvailable(true);
    }
  }, []);
  return (
    <div className="xl:flex w-full h-full max-w-screen-lg xl:max-w-screen-2xl mx-auto xl:mt-16 mb-10 xl:mb-24">
      {/* Inicio Texto */}
      <div className="w-full xl:w-2/3 h-full">
        <div className="m-10 text-cocoa-bark">
          <p className="text-2xl md:text-5xl font-righteous drop-shadow-2xl text-center xl:text-left">
            Descubre El Verdadero Significado De Sabor
          </p>
        </div>

        {/*Descripcion*/}
        <div className="m-10">
          <p className="text-md font-poppins drop-shadow-2xl text-center xl:text-left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words wich don’t look even slightly
            believable.
          </p>
        </div>
        {/*Descripcion*/}

        {/*Botones*/}
        <div className="m-10">
          <Button
            text="ORDENA YA"
            extraStyles="text-xl mx-auto xl:mx-0"
            isMain={false}
          />
        </div>
        {/*Botones*/}
      </div>
      {/* Fin Texto */}

      {/* Inicio Imagen */}
      <div className="xl:w-1/2 relative">
        <div className=" xl:absolute mx-auto xl:mx-0 w-[20rem] h-[20rem] xl:w-[28rem] xl:h-[28rem] bg-cocoa-bark rounded-full">
          <div className="xl:absolute mx-auto xl:mx-0 w-[16rem] h-[16rem] xl:w-[26rem] xl:h-[24rem] rounded-xl bg-coral-reef xl:-top-5 xl:-right-20 relative overflow-hidden">
            {imageAvailable ? (
              <ImageUploader 
                onImageUpload={(imageData) => {
                  setHomeImage(imageData);
                  saveHomeImage(imageData);
                }}
                currentImage={homeImage}
                buttonText="Cambiar imagen"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center font-righteous text-4xl text-cocoa-bark relative">
                <ImageUploader 
                  onImageUpload={(imageData) => {
                    setHomeImage(imageData);
                    setImageAvailable(true);
                    saveHomeImage(imageData);
                  }}
                  buttonText="Subir imagen"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Fin Imagen */}
    </div>
  );
}
