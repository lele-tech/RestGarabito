import { Button } from "../../../Components/Buttons";
import { Link } from "react-router-dom";

export function Contact_Info() {
  return (
    <div className="flex h-full mt-24">
      <div className="w-[20%] h-full bg-dawn-pink absolute right-0 top-0 hidden xl:visible"></div>

      <div className="w-full xl:absolute drop-shadow-xl bg-cocoa-bark py-10 xl:py-20 px-20 z-10">
        <div className="w-20 h-20 drop-shadow-xl bg-dawn-pink absolute -left-10 -top-10 z-10  hidden xl:visible"></div>

        <div className="-ml-6 md:ml-16 xl:ml-0">
          <h1 className="text-4xl md:text-5xl font-righteous text-dawn-pink">
            Información
          </h1>
          <ul className="text-soft-sand font-poppins text-sm md:text-xl mt-10 xl:mt-20 space-y-10 xl:space-y-16">
            <li>
              <a
                href="mailto:palenquegarabito@gmail.com"
                className="inline-flex items-center gap-7 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-x-7"
              >
                <img
                  src="/imgs/icons/mail.svg"
                  alt="email icon"
                  className="w-10 h-10"
                />
                <span>palenquegarabito@gmail.com</span>
              </a>
            </li>
            <li>
              <div className="inline-flex items-center gap-7 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-x-6">
                <img
                  src="/imgs/icons/phone.svg"
                  alt="email icon"
                  className="w-10 h-10"
                />

                <span>
                  <a href="tel:+50626393825">2639 3825</a> /{" "}
                  <a href="tel:+50626393826">2639 3826</a>
                </span>
              </div>
            </li>

            <li>
              <a
                href="https://wa.me/50664850312"
                target="_blank"
                className="inline-flex items-center gap-7 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4"
              >
                <img
                  src="/imgs/icons/whatsapp.svg"
                  alt="whatsapp icon"
                  className="w-10 h-10"
                />
                <span>6485 0312</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/maps/@9.644362,-83.833144,19z"
                target="_blank"
                className="inline-flex items-center gap-7 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-x-5"
              >
                <img
                  src="/imgs/icons/location.svg"
                  alt="email icon"
                  className="w-10 h-10"
                />
                <span>Miramar, Puntarenas</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-7 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4"
              >
                <img
                  src="/imgs/icons/clock.svg"
                  alt="email icon"
                  className="w-10 h-10"
                />
                <span>9:00 - 18:00*</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
