import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-espresso-brown text-soft-sand">
      {/* Sección del formulario */}
      <div className="flex flex-col items-center justify-center w-2/3 px-10 font-righteous">
        <p className="uppercase mb-2 text-2xl tracking-[0.3em] text-warm-beige">
          restaurante
        </p>
        <h1 className="mb-6 text-5xl text-center text-warm-beige">
          Palenque Garabito
        </h1>

        {/* Correo electrónico */}
        <div className="w-full max-w-md mb-4">
          <label className="block mb-2 text-sm text-warm-beige">
            Correo electrónico:
          </label>
          <div className="flex items-center px-4 py-3 rounded-full bg-soft-sand text-espresso-brown">
            <img
              src="/imgs/Mail.png"
              alt="Email Icon"
              className="w-5 h-5 mr-2 opacity-50"
            />
            <input
              type="email"
              placeholder="correoelectronico@gmail.com"
              className="w-full text-center bg-transparent font-poppins focus:outline-none placeholder:opacity-50"
            />
          </div>
        </div>

        
        <div className="w-full max-w-md mb-2">
          <label className="block mb-2 text-sm text-warm-beige ">
            Contraseña:
          </label>
          <div className="relative flex items-center px-4 py-3 rounded-full bg-soft-sand text-espresso-brown">
            <img
              src="/imgs/Padlock.png"
              alt="Lock Icon"
              className="w-5 h-5 mr-2 opacity-50"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              className="w-full text-center bg-transparent font-poppins focus:outline-none placeholder:opacity-50"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-opacity-50 cursor-pointer right-4 text-espresso-brown"
            >
              {showPassword ? (
                <Eye size={20} className="text-placeholder" />
              ) : (
                <EyeOff size={20} className="text-placeholder" />
              )}
            </div>
          </div>
        </div>

        {/* ¿Olvidaste tu contraseña? */}
        <p className="w-full max-w-md mb-6 text-sm text-center cursor-pointer font-poppins text-warm-beige hover:underline">
          ¿Olvidaste tu contraseña?
        </p>

        {/* Botón de Ingresar */}
        <button className="w-full max-w-md px-8 py-3 transition rounded-full font-poppins bg-deep-moss text-warm-beige hover:bg-earth-olive">
          Ingresar
        </button>
      </div>

      <div className="flex items-center justify-center w-1/2 h-full px-20 pt-10">
      <div className="flex flex-col items-center justify-center h-full rounded-t-full bg-soft-sand ">
        <img
          src="/imgs/ForknKnife.png"
          alt="Fork and Knife"
          className="max-w-[60%] "
        />
        </div>
      </div>
    </div>
  );
}
