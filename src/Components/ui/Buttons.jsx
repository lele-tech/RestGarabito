import PropTypes from "prop-types";

//Componente reutilizable de boton. Solo lo llaman y llenan los parametros de text, id, onCick con la informacion necesaria.
//extraStyles es para añadir estilos extra si son necesarios, principalmente modificar el width del boton a como se necesite.


export function Button({text = "Button", extraStyles = "", onClick = () => { },
    id, isMain=true}) {
        const bgClasses=isMain
        ? "bg-deep-moss from-deep-moss to-black/0"
        : "bg-cocoa-bark from-cocoa-bark to-black/0";
    return (
        <button type="button" id={id} onClick={onClick} className={`text-white font-poppins font-semibold text-center rounded-lg transition-all
        duration-300  ease-in-out hover:scale-110 flex items-center justify-center py-2 px-10 h-16 bg-cocoa-bark bg-gradient-to-b from-cocoa-bark to-black/0  ${bgClasses}  ${extraStyles}`}>
            {text}
        </button>
    ); 
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string,
    extraStyles: PropTypes.string,
    isMain: PropTypes.bool,
  };
