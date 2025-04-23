import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Button } from '../ui/Buttons';
import { login } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";main

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      alert("¡Inicio de sesión exitoso!");
      navigate("/"); 
    } catch (error) {
      console.error("Error de login:", error);
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 font-righteous">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <div className="w-full max-w-md mb-4">
          <label className="block mb-2 text-sm text-warm-beige text-start font-poppins font-medium">
            Correo electrónico:
          </label>
          <div className="flex items-center px-4 py-3 rounded-sm bg-soft-sand text-espresso-brown">
            <img src="/imgs/Mail.png" alt="Email Icon" className="w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              {...register("email", {
                required: "Campo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo electrónico inválido"
                }
              })}
              className="w-full text-start bg-transparent font-poppins focus:outline-none placeholder:text-espresso-brown/50 font-medium"
            />
          </div>
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full max-w-md mb-2">
          <label className="block mb-2 text-sm text-warm-beige text-start font-poppins font-medium">
            Contraseña:
          </label>
          <div className="relative flex items-center px-4 py-3 rounded-sm bg-soft-sand text-espresso-brown">
            <img src="/imgs/Padlock.png" alt="Lock Icon" className="w-5 h-5 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: "Campo obligatorio",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/,
                  message: "Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo"
                }
              })}
              className="w-full text-start bg-transparent font-poppins focus:outline-none placeholder:text-espresso-brown/50 font-medium"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-opacity-50 cursor-pointer right-4 text-espresso-brown"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <p className="w-full max-w-md mb-6 text-sm text-center cursor-pointer font-poppins text-warm-beige hover:underline">
          ¿Olvidaste tu contraseña?
        </p>
          
          <Button text='Ingresar' extraStyles='text-xl   xl:m-auto' isMain={true} />
          

      </form>
    </div>
  );
};

export default FormLogin;
