import { Plato } from "../types/firebaseTypes";
import { useState } from "react";
import cerrar from '../../public/imgs/icons/Cerrar.svg';

type CardPlatoProps = {
  plato: Plato;
};

export const CardPlato = ({ plato }: CardPlatoProps) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <div className="w-96 max-h-fit rounded-2xl shadow-xl bg-[#f3ece1] pt-0 px-0 pb-0 m-5 drop-shadow-lg">
        <div className="w-96 h-72 bg-[#C5B9A6] rounded-xl drop-shadow-lg">
          <img
            src={plato.imagen_url}
            alt={plato.nombre}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <div className="p-3">
          <h3 className="font-[Poppins] text-md font-semibold drop-shadow-lg text-[#362419] uppercase">
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
            <span className="font-[Poppins] text-lg font-bold drop-shadow-lg text-[#362419]">
              {plato.precio.toLocaleString("es-CR", {
                style: "currency",
                currency: "CRC",
              })}
            </span>
            <button
              className="ml-auto font-[Poppins] drop-shadow-lg text-sm font-bold text-deep-moss hover:underline transition duration-300 hover:scale-105 mr-6"
              onClick={() => setModalAbierto(true)}
            >
              MÁS INFO
            </button>
          </div>
        </div>
      </div>

      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center drop-shadow-2xl">
          <div className="bg-dawn-pink rounded-xl 2xl:w-2/6 h-5/6 sm:w-3/4 sm:h-4/5 shadow-lg relative">
            <div className="w-full h-3/5 relative bg-coral-reef rounded-t-xl">
              <img
                src={plato.imagen_url}
                alt={plato.nombre}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <button
                className="absolute top-2 right-2 bg-cocoa-bark rounded-full drop-shadow-lg"
                onClick={() => setModalAbierto(false)}
              >
                <img src={cerrar} alt="Cerrar" className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold font-poppins text-cocoa-bark mb-2">
                  {plato.nombre}
                </h2>
                <p className="text-lg font-bold font-poppins text-cocoa-bark">
                  {plato.precio.toLocaleString("es-CR", {
                    style: "currency",
                    currency: "CRC",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2">
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
                <p className="text-sm text-deep-moss">
                  {plato.tiempo_preparacion} Mins
                </p>
              </div>
              <p className="font-poppins text-lg 2xl:pt-8 pt-6">
                {plato.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPlato;
