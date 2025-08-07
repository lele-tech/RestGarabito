import { Button } from "../../Components/ui/Buttons"
import { Link } from "react-router-dom";

export function Packages_Title() {
    return (
        <div className="flex w-full  xl:mb-6 2xl:mb-20 xl:pt-0 2xl:pt-10 2xl:justify-end sm:justify-center">
            {/* Inicio Texto */}
            <div className="w-full 2xl:max-w-5xl h-full drop-shadow-md xl:pt-12 2xl:pt-28  sm:pt-4 2xl:px-8 container">
                <div className="m-20 text-[#D9CEBC] items-center 2xl:text-right sm:text-center  ">
                    <h2 className="text-2xl md:text-7xl xl:text-6xl 2xl:text-6xl font-righteous 2xl:tracking-[1rem] md:-mb-2 ">
                        restaurante
                    </h2>
                    <h1 className="text-4xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous ">
                        Palenque
                    </h1>
                    <h1 className="text-4xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous mr-3 ">
                        Garabito
                    </h1>
                    <p className="text-2xl md:text-3xl font-righteous 2xl:mx-20  sm:mx-4 text-center ">
                        La Parada Inteligente
                    </p>
                </div>
            </div>


            {/* Fin Texto */}

            {/* Inicio Logo */}
            <div className='w-full h-full items-center drop-shadow-md absolute hidden xl:flex  xl:mt-8 2xl:mt-6'>
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="-translate-y-[3rem] 2xl:-translate-y-[10rem] w-[30rem] 2xl:w-[47rem] z-0"
                />
                <div className="absolute left-[6rem] top-[2rem] 2xl:left-[30rem] 2xl:top-[3rem] z-10 rounded-full  border-[20px] border-cocoa-bark">
                    <img
                        src="/imgs/Logo.png"
                        alt="Logo_Garabito"
                        className="w-[30rem] 2xl:w-[35rem] rounded-full border-[20px] border-soft-sand  bg-[#D9CEBC] "
                    />
                </div>
            </div>
            {/* Fin Logo */}
        </div>
    );
}
