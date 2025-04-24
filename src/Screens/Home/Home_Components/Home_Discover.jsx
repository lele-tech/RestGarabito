import { Button } from "../../../Components/ui/Buttons";

const imageAvailable = false;

export function Home_Discover() {
  return (
    <div className="xl:flex w-full mt-10 mx-auto mb-6 2xl:mb-24 xl:mt-0 2xl:mt-10">
      {/* Inicio Texto */}
      <div className="w-full xl:w-2/3 h-full xl:pt-12 2xl:pt-2 xl:ml-16 2xl:ml-48">
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
        <div className=" xl:absolute mx-auto xl:mx-0 w-[20rem] h-[20rem] 2xl:w-[28rem] 2xl:h-[28rem] bg-cocoa-bark rounded-full">
          <div className="xl:absolute mx-auto xl:mx-0 w-[16rem] h-[16rem] 2xl:w-[26rem] 2xl:h-[24rem] rounded-xl bg-coral-reef xl:-top-5 xl:-right-20 ">
            {imageAvailable ? (
              <img
                src="/path/to/your/image.jpg"
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
