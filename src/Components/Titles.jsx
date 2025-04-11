export function Title_Light() {
    return (
        <div className='bg-soft-sand flex w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:mb-20 2xl:mb-28 xl:pt-1 2xl:pt-16 overflow-x-hidden'>

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16 xl:ml-12 2xl:ml-0">

                <div className='m-10 text-cocoa-bark'>
                    <h2 className='text-2xl md:text-7xl xl:text-6xl 2xl:text-7xl font-righteous tracking-[1rem] text-center md:-mb-2'>restaurante</h2>
                    <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
                        Palenque
                    </h1>
                    <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
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
                    className="absolute xl:left-[60rem] 2xl:left-[72rem] transform translate-y-[16rem] 2xl:translate-y-1/2 scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <div className="absolute h-24 w-full bg-cocoa-bark xl:left-[58.2rem] transform translate-y-[1rem] 2xl:hidden">
                </div>
                <img
                    src="/imgs/BackLogo_Brown.svg"
                    alt="Decoración"
                    className="absolute xl:left-[80rem] 2xl:left-[80rem] transform translate-y-1/2 scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/BackLogo_Brown.svg"
                    alt="Decoración"
                    className="absolute xl:left-[80rem] 2xl:left-[80rem] transform  scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/Logo.png"
                    alt="Logo_Garabito"
                    className="absolute xl:left-[43rem] 2xl:left-[46rem] -top-[12rem] transform translate-y-[18rem]  2xl:translate-y-1/2 w-[20rem] 2xl:w-[30rem] z-10"
                />
            </div>
            {/* Fin Logo */}

        </div>
    );
}

export function Title_Dark() {
    return (
        <div className='flex bg-cocoa-bark w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:mb-20 2xl:mb-28 xl:pt-1 2xl:pt-16 overflow-x-hidden'>

            {/* Inicio Logo */}
            <div className='w-1/2 justify-center items-center drop-shadow-md absolute hidden xl:flex'>
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute xl:-left-[2rem] 2xl:-left-[9rem]  transform xl:translate-y-[16rem] 2xl:translate-y-1/2 scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <div className="absolute h-24 w-full bg-soft-sand xl:-left-[20.3rem] transform translate-y-[1rem] 2xl:hidden">
                </div>
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute -left-[20rem] transform translate-y-1/2 scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute -left-[20rem] transform  scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/Logo.png"
                    alt="Logo_Garabito"
                    className="absolute  xl:left-[16rem] 2xl:left-[17rem] xl:-top-[4rem] 2xl:-top-[12rem] transform translate-y-1/2 w-[20rem] 2xl:w-[30rem] z-10"
                />
                <div className="absolute xl:left-[15rem] 2xl:left-[16rem] xl:-top-[6rem] 2xl:-top-[14rem] transform translate-y-1/2 w-[22rem] h-[22rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full bg-soft-sand z-0">
                </div>
            </div>
            {/* Fin Logo */}

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16 ml-auto xl:mr-12 2xl:mr-0 ">

                <div className='m-10 text-soft-sand'>
                    <h2 className='text-2xl md:text-7xl xl:text-6xl 2xl:text-7xl font-righteous tracking-[1rem] text-center md:-mb-2'>restaurante</h2>
                    <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
                        Palenque
                    </h1>
                    <h1 className="text-5xl md:text-9xl xl:text-8xl 2xl:text-9xl font-righteous text-center">
                        Garabito
                    </h1>
                    <p className="text-2xl md:text-3xl font-righteous text-center">La Parada Inteligente</p>
                </div>
            </div>
            {/* Fin Texto */}

        </div>
    );
}
