import ImageCarrousel from './ImageCarrousel';

function ProductDescription({ product }) {
  return (
    <div className="product-description">
        <div className="product-details">
            <h1>{product.product_name}</h1>
            <p>{product.description}</p>
            <h2>{product.volume}</h2>
            <h2>
              {product.discount ? (
                <span style={{ color: '#e60000' }}>
                  Q{(product.price - product.discount).toFixed(2)}
                </span>
              ) : (`Q${product.price}`)}
            </h2>
            <h3 className="stock-product">{product.stock} en existencias</h3>
        </div>    
        <ImageCarrousel images={[product.product_image]} cantStars={product.cant_stars} />
    </div>
  );
}

export default ProductDescription;