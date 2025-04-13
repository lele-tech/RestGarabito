import { Button } from "../../../Components/Buttons";
import { useState } from "react";

export function Home_Discover() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAvailable, setImageAvailable] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        setImageAvailable(true);
      };
      reader.readAsDataURL(file);
    }
  };

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
            humour, or randomised words wich don't look even slightly
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
        <div className="xl:absolute mx-auto xl:mx-0 w-[20rem] h-[20rem] xl:w-[28rem] xl:h-[28rem] bg-cocoa-bark rounded-full">
          <div className="xl:absolute mx-auto xl:mx-0 w-[16rem] h-[16rem] xl:w-[26rem] xl:h-[24rem] rounded-xl bg-coral-reef xl:-top-5 xl:-right-20 relative">
            <label htmlFor="imageInput" className="absolute top-2 right-2 cursor-pointer z-10 bg-cocoa-bark rounded-full p-2 hover:bg-deep-moss transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-coral-reef">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {imageAvailable ? (
              <img
                src={imageUrl}
                alt="Imagen dentro del cuadrado"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center font-righteous text-4xl text-cocoa-bark">
                PHOTO
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Fin Imagen */}
    </div>
  );
}
