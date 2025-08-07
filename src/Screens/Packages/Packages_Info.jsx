import { CardPaquete } from '../../Components/CardPaquete';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Packages_Info() {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // valor base para pantallas grandes
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-20">
      <div>
        <h1 className="text-3xl font-righteous text-dawn-pink mb-8">Paquete de desayunos</h1>
        <Slider {...settings}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="px-2">
              <CardPaquete />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h1 className="text-3xl font-righteous text-dawn-pink mb-8">Paquete de almuerzos</h1>
        <Slider {...settings}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="px-2">
              <CardPaquete />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
