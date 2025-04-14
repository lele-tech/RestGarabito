import { Plato } from "../types/firebaseTypes";

type CardPlatoProps = {
  plato: Plato;
};

export const CardPlato = ({ plato }: CardPlatoProps) => {
  return (
    <div className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-xl bg-[#f3ece1] drop-shadow-lg overflow-hidden m-3">
      <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 bg-[#C5B9A6] rounded-t-2xl overflow-hidden">
        <img
          src={plato.imagen_url}
          alt={plato.nombre}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="font-[Poppins] text-md font-semibold text-[#362419] uppercase">
          {plato.nombre}
        </h3>

        <div className="font-[Poppins] flex items-center text-xs text-[#362419A6] opacity-60 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.8rem"
            height="0.8rem"
            viewBox="0 0 24 24"
            aria-label="Clock icon"
          >
            <g
              fill="none"
              stroke="#5D5C26"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M11 8v5h5" />
            </g>
          </svg>
          <span className="ml-1">{plato.tiempo_preparacion} min</span>
        </div>

        <div className="flex items-center mt-1 px-1">
          <span className="font-[Poppins] text-lg font-bold text-[#362419]">
            {plato.precio.toLocaleString("es-CR", {
              style: "currency",
              currency: "CRC",
            })}
          </span>
          <button className="ml-auto font-[Poppins] text-sm font-bold text-deep-moss hover:underline transition duration-300 hover:scale-105">
            MÁS INFO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlato;
