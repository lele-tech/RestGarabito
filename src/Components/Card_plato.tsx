import { Plato } from "../types/firebaseTypes";
import { useState } from "react";
import cerrar from '../../public/imgs/icons/Cerrar.svg';
import { useNavigate } from "react-router-dom";

type CardPlatoProps = {
  plato: Plato;
};

export const CardPlato = ({ plato }: CardPlatoProps) => {
  console.log("Plato recibido en CardPlato:", plato);
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
