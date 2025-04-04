import PropTypes from "prop-types";

//Componente reutilizable de boton. Solo lo llaman y llenan los parametros de text, id, onCick con la informacion necesaria.
//extraStyles es para añadir estilos extra si son necesarios, principalmente modificar el width del boton a como se necesite.

export function MainButton({text = "Button", extraStyles = "", onClick = () => { },
    id}) {
    return (
        <button type="button" id={id} onClick={onClick} className={`text-white font-bold text-center rounded-sm transition-all
        duration-300 flex items-center justify-center py-2 px-7 m-3 bg-deep-moss bg-gradient-to-b from-deep-moss to-black/0 ${extraStyles}`}>
            {text}
        </button>
    );
}

export function SecondaryButton({text = "Button", extraStyles = "", onClick = () => { },
    id}) {
    return (
        <button type="button" id={id} onClick={onClick} className={`text-white font-bold text-center rounded-sm transition-all
        duration-300 flex items-center justify-center py-2 px-7 m-3 bg-cocoa-bark bg-gradient-to-b from-cocoa-bark to-black/0 ${extraStyles}`}>
            {text}
        </button>
    );
}

MainButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string,
    extraStyles: PropTypes.string,
  };

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string,
    extraStyles: PropTypes.string,
  };