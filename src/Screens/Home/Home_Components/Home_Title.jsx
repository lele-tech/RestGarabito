import { Button } from "../../../Components/ui/Buttons";
import { Link } from "react-router-dom";

export function Home_Title() {
  return (
    <div className="flex w-full pt-10 xl:my-6 2xl:mb-20 xl:pt-0 2xl:pt-10">
      {/* Inicio Texto */}
      <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-12 2xl:pt-2 xl:ml-16 2xl:ml-48 ">
        <div className="m-10 text-cocoa-bark">
          <h2 className="text-2xl md:text-7xl xl:text-6xl 2xl:text-7xl font-righteous tracking-[1rem] text-center md:-mb-2">
            restaurante
          </h2>
          <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
            Palenque
          </h1>
          <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
            Garabito
          </h1>
          <p className="text-2xl md:text-3xl font-righteous text-center">
            La Parada Inteligente
          </p>
        </div>

        {/*Descripcion*/}
        <div className="m-10">
          <p className="text-sm md:text-md font-poppins text-center xl:text-left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words wich don’t look even slightly
            believable.
          </p>
        </div>
        {/*Descripcion*/}

        {/*Botones*/}
        <div className="flex gap-20 mx-10">
          <div className="mx-auto xl:mx-0 flex gap-10">
            <Link to="/menu">
              <Button
                text="VER MENÚ"
                extraStyles="text-sm md:text-xl "
                id="menu"
                isMain={true}
              />
            </Link>
            <Button
              text="VER PAQUETES"
              extraStyles="text-sm md:text-xl"
              id="packages"
              isMain={false}
            />

          </div>

        </div>
        {/*Botones*/}
      </div>

      {/* Fin Texto */}

      {/* Inicio Logo */}
      <div className='w-full xl:w-1/2 h-full justify-center items-center drop-shadow-md  hidden xl:flex overflow-hidden xl:mt-8 2xl:mt-6'>
        <img
          src="/imgs/Logo.png"
          alt="Logo_Garabito"
          className="w-[20rem] 2xl:w-[30rem] z-10"
        />
      </div>
      {/* Fin Logo */}
    </div>
  );
}
