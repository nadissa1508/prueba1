import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';
import SpecificationContainer from '../components/SpecificationContainer';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import Footer from '../components/Footer';
import jsonProducts from '../components/products.json'; 
import { useParams } from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import { CartContext } from '../context/CartContext'; 

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = jsonProducts.products.find(p => p.id.toString() === id);
  const [quantity, setQuantity ] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('¡Producto agregado!');
  };

  return (
    <div className="ProductDetail-page">
      <Header />
      <ProductDescription product={product} />
      <SpecificationContainer title="Ingredientes" elements={product.specifications} />
      <div className="buy-section"> 
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button text="Añadir al carrito" onClick={handleAddToCart}/>
      </div>
      <Footer />
    </div>
  );
}       

export default ProductDetail;