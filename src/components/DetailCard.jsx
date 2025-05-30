import QuantitySelector from "./QuantitySelector";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 


function DetailCard({ id, product_image, product_name, price, discount }){
  const { cart, addToCart } = useContext(CartContext);
  const product = cart.find(item => item.id === id);
  const quantity = product ? product.quantity : 1;
  const actualPrice = price - (product?.discount || 0);
  const subtotal = actualPrice * quantity;

  const handleSetQuantity = (newQuantity) => {
    const difference = newQuantity - quantity;
    if (difference !== 0) {
      addToCart({ id, product_image, product_name, price }, difference);
    }
  };

  return(
        <>
          <div className="grid-item product-info">
            <img src={product_image} alt={product_name} className="product-image" />
            <span>{product_name}</span>
          </div>
          <div className="grid-item">{actualPrice.toFixed(2)}</div>
          <div className="grid-item">
            <div className="quantity-selector">
              <QuantitySelector quantity={quantity} setQuantity={handleSetQuantity} />
            </div>
          </div>
          <div className="grid-item">{subtotal.toFixed(2)}</div>
      </>
  );
}

export default DetailCard;

