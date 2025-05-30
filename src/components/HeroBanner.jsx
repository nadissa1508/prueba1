import Button from './Button';
import heroBannerImg from '../assets/hero-banner.webp';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src={heroBannerImg} alt="Hero Banner" className="hero-banner-img" />
      <div className="hero-banner-detail">
        <h1>Bienvenid@ a BLush & Blossom</h1>
        <p>Descubre los nuevos ingresos de las marcas más codiciadas del K-beauty <br/>
           <b>Anua</b>, <b>Skin1004 </b> y <b> Beauty of Joseon </b> ya están disponibles en nuestra tienda. <br/>
           Esta temporada, renueva tu rutina de skincare con fórmulas revolucionarias <br/>
           que combinan ingredientes tradicionales coreanos y tecnología avanzada.</p>
        <Button text="Comprar ahora" ></Button>
      </div>
    </div>
  );
}   

export default HeroBanner;