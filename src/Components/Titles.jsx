export function Title_Light() {
    return (
        <div className='bg-soft-sand flex w-full pt-10 xl:mb-16 2xl:mb-28 xl:pt-0 2xl:pt-10'>

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16 xl:ml-12 2xl:ml-48">

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
            <div className='w-full h-full justify-center items-center drop-shadow-md absolute hidden xl:flex overflow-hidden xl:mt-12'>
                <img
                    src="/imgs/BackLogo_Brown.svg"
                    alt="Decoración"
                    className="absolute transform translate-x-[30rem] -translate-y-[8rem] 2xl:translate-x-[46rem] 2xl:-translate-y-[12rem] scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/Logo.png"
                    alt="Logo_Garabito"
                    className="absolutetransform translate-x-[13rem] -translate-y-[8rem] 2xl:translate-x-[20rem] 2xl:-translate-y-[12rem] w-[20rem] 2xl:w-[30rem] z-10"
                />
            </div>
            <div className="absolute h-24 w-[50%] bg-cocoa-bark xl:-right-[18.2rem] 2xl:-right-[28.3rem] xl:top-[0.4rem] 2xl:top-[0.2rem] transform hidden xl:flex">
            </div>
            {/* Fin Logo */}

        </div>
    );
}

export function Title_Dark() {
    return (
        <div className='bg-cocoa-bark flex w-full pt-10 xl:mb-16 2xl:mb-28 xl:pt-0 2xl:pt-10'>

            {/* Inicio Logo */}
            <div className='w-full h-full justify-center items-center drop-shadow-md absolute hidden xl:flex overflow-hidden xl:mt-12'>
                <img
                    src="/imgs/BackLogo_White.svg"
                    alt="Decoración"
                    className="absolute transform -translate-x-[34rem] -translate-y-[8rem] 2xl:-translate-x-[50rem] 2xl:-translate-y-[12rem] scale-x-[1.2] w-[20rem] 2xl:w-[30rem] z-0"
                />
                <img
                    src="/imgs/Logo.png"
                    alt="Logo_Garabito"
                    className="absolute transform -translate-x-[16rem] -translate-y-[8rem] 2xl:-translate-x-[24rem] 2xl:-translate-y-[12rem] w-[20rem] 2xl:w-[30rem] z-10"
                />
                <div className="absolute -translate-x-[16rem] -translate-y-[8rem] 2xl:-translate-x-[24rem] 2xl:-translate-y-[12rem] w-[22rem] h-[22rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full bg-soft-sand z-0">
                </div>
            </div>
            <div className="absolute h-24 w-[25%] bg-soft-sand -left-[2.2rem] 2xl:-left-[1.2rem] xl:top-[0.4rem] 2xl:top-[0.6rem] hidden xl:flex">
            </div>
            {/* Fin Logo */}

            {/* Inicio Texto */}
            <div className="w-full xl:w-1/2 h-full drop-shadow-md xl:pt-16 ml-auto xl:mr-24 2xl:mr-48">

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
