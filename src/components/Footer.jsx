import FooterDetail from './FooterDetail';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/X.png';
import tiktokIcon from '../assets/tik-tok.png';

const linksAboutUs = [
    { key: 1, text: 'Nuestra historia', url: '#' },
    { key: 2, text: 'Misión y visión', url: '#' },
    { key: 3, text: 'Responsabilidad social', url: '#' },
    { key: 4, text: '¿Por qué comprar aquí?', url: '#' },
]
const linksResolvingDoubts = [
  { key: 1, text: 'FAQs', url: '#' },
  { key: 2, text: 'Politicas de compra', url: '#' },
  { key: 3, text: 'Pagos y envios', url: '#' },
  { key: 4, text: 'Términos y condiciones', url: '#' },
];

function Footer() {
  return (
    <footer className="footer-app">
      <div className="footer-top">
        <div className="social-media-container">
          <h1>Siguenos</h1>
          <div className="social-media-icons">
                <a href="#" className="social-media-btn">
                  <img src={facebookIcon} alt="Facebook" className="social-media-icon"/>
                </a>
                <a href="#" className="social-media-btn">
                  <img src={instagramIcon} alt="Instagram" className="social-media-icon"/>
                </a>
                <a href="#" className="social-media-btn">
                  <img src={twitterIcon} alt="Twitter" className="social-media-icon"/>
                </a>
                <a href="#" className="social-media-btn">
                  <img src={tiktokIcon} alt="TikTok" className="social-media-icon"/>
                </a>
            </div>
          <div className="footer-contact">
            <p>12 Calle 6-48, Zona 10 Ciudad de Guatemala, Guatemala</p>
            <p>info@blushyblossom.com</p>
            <p>+502 1234-5678</p>
          </div>
        </div>

        <div className="footer-details">
          <FooterDetail title="Acerca de nosotros" links={linksAboutUs} />
          <FooterDetail title="Resolviendo tus dudas" links={linksResolvingDoubts} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Blush & Blossom Store. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;