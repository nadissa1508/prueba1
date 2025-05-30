import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import FavProductCard from '../components/FavProductCard';
import Footer from '../components/Footer';
import jsonProducts from '../components/products.json'
import { useRef, useEffect, useMemo, useState } from 'react';

function ProductList() {
  const [_, forceUpdate] = useState(false); 
  const favoriteRef = useRef(JSON.parse(localStorage.getItem('favoriteProducts')) || []);
  const viewedRef = useRef(JSON.parse(localStorage.getItem('viewedProducts')) || []);
  const [searchTerm, setSearchTerm] = useState("");

  const topRef = useRef(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  const toggleFavorite = (productId) => {
    const index = favoriteRef.current.indexOf(productId);
    if (index >= 0) {
      favoriteRef.current.splice(index, 1); 
    } else {
      favoriteRef.current.push(productId); 
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteRef.current));
    forceUpdate(f => !f); 
  };

  const handleView = (productId) => {
    if (!viewedRef.current.includes(productId)) {
      viewedRef.current.push(productId);
      localStorage.setItem('viewedProducts', JSON.stringify(viewedRef.current));
      forceUpdate(f => !f); 
    }
  };

  const favoriteProducts = jsonProducts.products.filter(p =>
    favoriteRef.current.includes(p.id)
  );

  const recommendedProducts = useMemo(() => {
    return jsonProducts.products.filter(p => viewedRef.current.includes(p.id));
  }, [_, favoriteRef]);

  const filteredProducts = jsonProducts.products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ProductList-page">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <HeroBanner />
      <h1 className="title-productlist" >Productos disponibles</h1>
      <div className="card-products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product_id={product.id}
            product_image={product.product_image}
            product_name={product.product_name}
            price={product.price}
            discount={product.discount}
            onToggleFavorite={() => toggleFavorite(product.id)}
            isFavorite={favoriteRef.current.includes(product.id)}
            onView={() => handleView(product.id)}
          />
        ))}
      </div>
      <div className="card-products">
        <FavProductCard title="Favoritos" products={favoriteProducts} favoriteRef={favoriteRef} toggleFavorite={toggleFavorite} />
        <FavProductCard title="Recomendados" products={recommendedProducts} favoriteRef={favoriteRef} toggleFavorite={toggleFavorite}  />
      </div>  
      <Footer />
    </div>
  );
}   

export default ProductList;