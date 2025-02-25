export function Login() {
    return (
        <div className="flex h-screen bg-espresso-brown text-soft-sand gap-44 justify-center pr-20">
            <div className="w-1/2 flex flex-col font-righteous justify-center items-center px-4 py-4 max-w-md">
                <p className="font-righteous  text-warm-beige uppercase  mb-2 text-2xl tracking-[0.3em]">
                    restaurante
                </p>
                <h1 className=" font-righteous  text-5xl  mb-4 text-warm-beige text-center">
                    Palenque Garabito
                </h1>

                <div className="w-full mb-4">
                    <label className="block text-warm-beige text-sm mb-2">
                        Correo electrónico:
                    </label>
                    <div className="flex items-center bg-soft-sand text-espresso-brown rounded-full px-4 py-3">
                        <img src="/public/imgs/Mail.png" alt="Email Icon" className="w-5 h-5 mr-2" />
                        <input
                            type="email"
                            placeholder="correoelectronico@gmail.com"
                            className="text-center  bg-transparent focus:outline-none w-full"
                        />
                    </div>
                </div>

                <div className="w-full mb-2">
                    <label className="block text-warm-beige text-sm mb-2">
                        Contraseña:
                    </label>
                    <div className="flex items-center bg-soft-sand text-espresso-brown rounded-full px-4 py-3">
                        <img src="/public/imgs/Padlock.png" alt="Lock Icon" className="w-5 h-5 mr-2" />
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="font-poppins bg-transparent focus:outline-none w-full text-center  placeholder:font-light"
                        />
                    </div>
                </div>

                <p className="text-sm font-poppins text-warm-beige text-center w-full mb-6 cursor-pointer hover:underline">
                    ¿Olvidaste tu contraseña?
                </p>

                <button className="bg-deep-moss text-warm-beige font-bold rounded-full px-8 py-3 w-full transition hover:bg-earth-olive">
                    Ingresar
                </button>
            </div>

            <div className="w-[25%] bg-soft-sand flex justify-center items-center rounded-t-[300px]">
                <img
                    src="/imgs/ForknKnife.png"
                    alt="Fork and Knife"
                    className="w-80 h-80"
                />
            </div>
        </div>
    );
}
