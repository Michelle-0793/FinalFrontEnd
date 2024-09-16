import React from 'react';
import '../Styles/HomeContent.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 

// Importación de las imágenes de los logos
import Logo1 from '../Img/Logo_1.png';
import Logo2 from '../Img/Logo_2.png';
import Logo3 from '../Img/Logo_3.png';
import Logo4 from '../Img/Logo_4.png';
import Logo5 from '../Img/Logo_5.png';

// Elementos del carrusel usando las imágenes importadas
const items = [
  <img src={Logo1} alt="Logo 1" className="CarouselImg" />,
  <img src={Logo2} alt="Logo 2" className="CarouselImg" />,
  <img src={Logo3} alt="Logo 3" className="CarouselImg" />,
  <img src={Logo4} alt="Logo 4" className="CarouselImg" />,
  <img src={Logo5} alt="Logo 5" className="CarouselImg" />,
];

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 },
  1300: { items: 5 }
};

/*
const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-arrow-left">
    &#10094;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-arrow-right">
    &#10095;
  </button>
);
*/

function HomeContent() {
  return (
    <div className="divContenido">
      <div className="ImgPortada">
        <div className="TextoPortada">
          <h1>Transformando ideas en <br />diseños extraordinarios</h1>
  
        </div>
      </div>

      {/* Carrusel de logos */}
	
      <div className="divCarrucel">
	  <h2>Marcas que han confiado en mi trabajo</h2><br />
    <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    infinite
    autoPlay
    autoPlayInterval={3000}
    disableDotsControls
    disableButtonsControls
    renderPrevButton={() => <button className="custom-arrow custom-arrow-left">‹</button>}
    renderNextButton={() => <button className="custom-arrow custom-arrow-right">›</button>}
  />

      </div>
<br /><br /> <br />
      <div className='divDestacarServicios'>
        <h1>Demos forma a la identidad visual de su marca</h1>
        <p>Una identidad gráfica bien construida, que refleje la esencia y valores de su negocio, <br />
        es fundamental para atraer a sus clientes y lograr resultados. <br />
        ¡Estoy aquí para ayudarle a crear una Identidad Visual sólida <br />que haga destacar a su negocio!</p>

<div className='LineaDivisora'></div>

<div className='ProyectosDestacados'>

</div>

</div>

    </div>
    
  );
}

export default HomeContent;

