

export const CardPaquete = () => {

  return (
    <div className="2xl:w-96   max-h-fit   rounded-2xl shadow-xl bg-[#f3ece1] pt-0 px-0 pb-0 m-5 drop-shadow-lg">
      <div className="2xl:w-96  h-72 bg-[#C5B9A6] rounded-xl drop-shadow-lg">
       
      </div>

      <div className="p-3">
        <h3 className="font-[Poppins] text-md font-semibold drop-shadow-lg text-[#362419] uppercase">
      Paquete1
        </h3>


        <div className="flex items-center mt-1 px-1">
          <span className="font-[Poppins] text-lg font-bold drop-shadow-lg text-[#362419]">
         1800
          </span>
          <button className="ml-auto font-[Poppins] drop-shadow-lg text-sm font-bold text-deep-moss hover:underline transition duration-300 hover:scale-105 mr-6">
            MÁS INFO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPaquete;
