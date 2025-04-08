import FormLogin from "./Auth/FormLogin";

const Footer = () => {

  return (
    <footer className="bg-[#EDE0D4] text-[#4D3B2A] p-8">


      <div className="bg-[#4D3B2A] text-[#EDE0D4] text-center p-4 mt-6 flex flex-col md:flex-row justify-between items-center">
        <p>Todos los derechos reservados por: Palenque Garabito</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <span>📞 2639 3825 / 2639 3826</span>
          <span>💬 6485 0312</span>
          <span>📘 Palenque Garabito</span>
        </div>
        <FormLogin />
      </div>
    </footer>
  );
};

export default Footer;
