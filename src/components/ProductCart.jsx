import { useMemo } from 'react';
import DetailCard from "./DetailCard";

function ProductCart({ products }) {
  const total = useMemo(() => {
    return products.reduce((acc, item) => {
      const actualPrice = item.discount ? item.price - item.discount : item.price;
      return acc + actualPrice * item.quantity;
    }, 0);
  }, [products]);
  
  return (
    <div className="product-cart">
      <div className="cart-grid">
        <div className="grid-header">Producto</div>
        <div className="grid-header">Precio</div>
        <div className="grid-header">Cantidad</div>
        <div className="grid-header">Subtotal</div>
        {products.map((product, index) => (
           <DetailCard
              key={index}
              id ={product.id}
              product_image={product.product_image}
              product_name={product.product_name}
              price={product.price}
              discount={product.discount}
            />
        ))}
      </div>

      <div className="cart-divider"></div>
      <div className="total-cart">
        <h1>Total</h1>
        <h1 className="total-cart-variable">Q{total.toFixed(2)}</h1>
      </div>
    </div>
  );
}

export default ProductCart;