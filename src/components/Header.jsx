import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import logoEcommerce from '../assets/logo-blush-blossom.png';
import cartIcon from '../assets/cart-icon.png';

function Header(props) {
  const navigate = useNavigate(); 

  function openCart() {
    navigate('/cart');
  }

  function handleClick(){
    navigate('/');
  }
  return (
    <header className="header-app">
      <img src={logoEcommerce} alt="Logo e-commerce" className="logo" onClick={handleClick}/>
      <SearchBar searchTerm={props.searchTerm} onSearchChange={props.onSearchChange} />
      <button className="cart-button" onClick={openCart} >
        <img src={cartIcon} alt="Boton de Carrito" className="cart-icon" />
      </button>
    </header>
  );
}

export default Header;