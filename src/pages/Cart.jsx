import Header from '../components/Header';
import ProductCart from '../components/ProductCart';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext'; 
import { useContext, useRef, useEffect } from 'react';

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const topRef = useRef(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  const handlePayment = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if (total > 999.99) { alert("ERROR: El total excede los $999.99"); } else { alert("Pago procesado correctamente"); }
  }

  return (
    <div className="Cart-page">
      <Header />
      <div className="button-container-cart">
        <Button text="Vaciar carrito" onClick={() => {
          clearCart();
        }} />
      </div>
      <div className="cart-background"> 
        {
          cart.length > 0
          ? <ProductCart products={cart} />
          : <p>Tu carrito está vacío. ¡Comienza a agregar productos!</p>
        }   
      </div>
      <div className="button-container-cart">
        <Button text="Pagar pedido" onClick = {handlePayment} />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;