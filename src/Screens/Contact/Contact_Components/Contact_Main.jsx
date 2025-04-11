import { Button } from "../../../Components/Buttons";
import { Link } from "react-router-dom";

export function Contact_Main() {
  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText("64850312");
    //alert('¡Número copiado al portapapeles!')
  };

  return (
    <div className="">
      <img
        className="h-72 mt-12 drop-shadow-md mx-auto xl:mx-0"
        src="/imgs/Logo_Texto.png"
        alt="Logo de Palenque Garabito"
      />

      <div className="m-10 text-cocoa-bark drop-shadow-xl">
        <h2 className="text-2xl md:text-7xl font-righteous text-center md:-mb-2">
          Contáctenos
        </h2>
        <p className="text-xl md:text-2xl mx-auto font-poppins text-center mt-5 w-[70%]">
          Siéntete libre de contactarnos en cualquier momento. Te responderemos
          lo más pronto posible!
        </p>
      </div>

      <div className=" text-cocoa-bark opacity-55 drop-shadow-xl">
        <p className="text-2xl md:text-3xl mx-auto font-poppins text-center">
          6485 0312
        </p>
        <div className="border-b-4 border-cocoa-bark w-1/2 mx-auto my-2 relative">
          <div className="bg-cocoa-bark w-5 h-5 absolute -left-1 -top-2 rotate-45"></div>
          <div className="bg-cocoa-bark w-5 h-5 absolute -right-1 -top-2 rotate-45"></div>
        </div>
      </div>

      <div className="mt-8">
        <a href={"https://wa.me/+50664850312"} target="_blank">
          <Button
            text="Contactar"
            extraStyles="text-sm md:text-2xl px-12 mx-auto"
            id="menu"
            isMain={true}
            onClick={handleCopyPhoneNumber}
          />
        </a>
      </div>
    </div>
  );
}
