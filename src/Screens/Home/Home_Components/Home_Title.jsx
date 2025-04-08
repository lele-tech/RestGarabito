import { MainButton, SecondaryButton } from '../../../Components/ui/Buttons'
import { Link } from 'react-router-dom'

export function Home_Title() {
  return (
    <div className='flex w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:pt-16'>

      {/* Inicio Texto */}
      <div className="w-full xl:w-1/2 h-full drop-shadow-md">

        <div className='m-10 text-cocoa-bark'>
          <h2 className='text-2xl md:text-7xl font-righteous tracking-[1rem] text-center md:-mb-2'>restaurante</h2>
          <h1 className="text-5xl md:text-9xl font-righteous text-center">
            Palenque
          </h1>
          <h1 className="text-5xl md:text-9xl font-righteous text-center">
            Garabito
          </h1>
          <p className="text-2xl md:text-3xl font-righteous text-center">La Parada Inteligente</p>
        </div>

        {/*Descripcion*/}
        <div className='m-10'>
          <p className='text-sm md:text-md font-poppins text-center xl:text-left'>There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            wich don’t look even slightly believable.</p>
        </div>
        {/*Descripcion*/}

        {/*Botones*/}
        <div className='m-2 md:m-10 flex xl:ml-20'>
          <div className='mx-auto xl:mx-0 flex gap-10'>
            <Link to="/menu">
              <MainButton text='VER MENÚ' extraStyles='text-sm md:text-xl' id='menu' />
            </Link>
            <SecondaryButton text='VER PAQUETES' extraStyles='text-sm md:text-xl' id='packages' />
          </div>
        </div>
        {/*Botones*/}
      </div>

      {/* Fin Texto */}

      {/* Inicio Logo */}
      <div className='w-1/2 justify-center items-center drop-shadow-md absolute hidden xl:flex'>
        <img
          src="/imgs/BackLogo_Brown.svg"
          alt="Decoración"
          className="absolute left-[72rem]  transform translate-y-1/2 scale-x-[1.2] w-[30rem] z-0"
        />
        <img
          src="/imgs/BackLogo_Brown.svg"
          alt="Decoración"
          className="absolute left-[80rem] transform translate-y-1/2 scale-x-[1.2] w-[30rem] z-0"
        />
        <img
          src="/imgs/BackLogo_Brown.svg"
          alt="Decoración"
          className="absolute left-[80rem] transform  scale-x-[1.2] w-[30rem] z-0"
        />
        <img
          src="/imgs/Logo.png"
          alt="Logo_Garabito"
          className="absolute left-[46rem] -top-[12rem] transform translate-y-1/2 w-[30rem] z-10"
        />
      </div>
      {/* Fin Logo */}

    </div>
  );
}
