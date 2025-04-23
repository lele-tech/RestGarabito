import { Button } from "../../../Components/Buttons";
import { Link } from "react-router-dom";

export function Home_Title() {
  return (
    <div className="flex w-full pt-10 xl:mb-6 2xl:mb-20 xl:pt-0 2xl:pt-10">
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
      <div className='w-full h-full justify-center items-center drop-shadow-md absolute hidden xl:flex overflow-hidden xl:mt-8 2xl:mt-6'>
        <img
          src="/imgs/Logo.png"
          alt="Logo_Garabito"
          className="transform translate-x-[23rem] -translate-y-[8rem] 2xl:translate-x-[36rem] 2xl:-translate-y-[12rem] w-[20rem] 2xl:w-[30rem] z-10"
        />
        <img
          src="/imgs/BackLogo_Brown.svg"
          alt="Decoración"
          className="transform translate-x-[20rem] -translate-y-[8rem] 2xl:translate-x-[32rem] 2xl:-translate-y-[12rem] scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
        />
      </div>
      <div className="2xl:-mt-10 translate-x-[14.15rem] 2xl:translate-x-[17.3rem] -translate-y-[0.65rem] 2xl:-translate-y-[0.8rem] h-24 w-[35%] bg-cocoa-bark transform hidden xl:flex">
      </div>
      {/* Fin Logo */}
    </div>
  );
}
