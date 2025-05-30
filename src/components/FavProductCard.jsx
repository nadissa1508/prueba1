import { useState } from "react";
import ProductCard from "./ProductCard";

function FavProductCard({ title, products, favoriteRef, toggleFavorite }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-card">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <button className="dropdown-toggle">{isOpen ? "▲" : "▼"}</button>
      </div>
      {isOpen && (
      <div className="dropdown-content">
        <div className="card-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product_id={product.id}
              product_image={product.product_image}
              product_name={product.product_name}
              price={product.price}
              onToggleFavorite={() => toggleFavorite(product.id)}
              isFavorite={favoriteRef.current.includes(product.id)}
            />
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

export default FavProductCard;
