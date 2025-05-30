import { useNavigate } from 'react-router-dom'; 
import emptyHeartIcon from '../assets/empty-heart-icon.png';
import fullHeartIcon from '../assets/heart-icon.png';
import eyeIcon from '../assets/eye-icon.png';
import { useEffect } from 'react';

function ProductCard(props){
    const navigate = useNavigate();
    const handleClick = () => {
        if (props.onView) props.onView(props.product_id);
        navigate(`/product/${props.product_id}`);
    }
    const hasDiscount = props.discount && props.discount > 0;
    const discountedPrice = hasDiscount ? props.price - props.discount : props.price;
    return(
        <div className="product-card" onClick={handleClick}>
            {props.discount > 0 && (
                <div className="product-discount-tag">
                    Q{props.price}
                </div>
            )}
            <img src={props.product_image} alt={`Image product ${props.product_name}`} className="image-product" />
            <h3 className="product-name" >{props.product_name}</h3>
            <p className="product-price">
                Q{props.discount ? props.price - props.discount : props.price}
            </p>
            <div className="buttons-product-card" >
                 <button className="eye-btn">
                    <img src={eyeIcon} alt="Boton de ojo" className="eye-icon" />
                </button>
                <button className="empty-heart-btn" onClick={(e) => { e.stopPropagation(); props.onToggleFavorite();}}>
                    <img src={props.isFavorite ? fullHeartIcon : emptyHeartIcon} alt="Boton de favorito" className="empty-heart-icon" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;