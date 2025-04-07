export function Title_Light() {
    return (
        <div className='bg-soft-sand flex w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:pt-16 xl:pb-28'>

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16">

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

export function Title_Dark() {
    return (
        <div className='flex bg-cocoa-bark w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:pt-16 xl:pb-28'>

            {/* Inicio Logo */}
            <div className='w-1/2 justify-center items-center drop-shadow-md absolute hidden xl:flex'>
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute -left-[9rem]  transform translate-y-1/2 scale-x-[1.2] w-[30rem] z-0"
                />
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute -left-[20rem] transform translate-y-1/2 scale-x-[1.2] w-[30rem] z-0"
                />
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute -left-[20rem] transform  scale-x-[1.2] w-[30rem] z-0"
                />
                <img
                    src="/imgs/Logo.png"
                    alt="Logo_Garabito"
                    className="absolute left-[17rem] -top-[12rem] transform translate-y-1/2 w-[30rem] z-10"
                />
                <div className="absolute left-[16rem] -top-[14rem] transform translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-soft-sand z-0">
                </div>
            </div>
            {/* Fin Logo */}

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16 ml-auto ">

                <div className='m-10 text-soft-sand'>
                    <h2 className='text-2xl md:text-7xl font-righteous tracking-[1rem] text-center md:-mb-2'>restaurante</h2>
                    <h1 className="text-5xl md:text-9xl font-righteous text-center">
                        Palenque
                    </h1>
                    <h1 className="text-5xl md:text-9xl font-righteous text-center">
                        Garabito
                    </h1>
                    <p className="text-2xl md:text-3xl font-righteous text-center">La Parada Inteligente</p>
                </div>
            </div>
            {/* Fin Texto */}

        </div>
    );
}
