 import starIcon from '../assets/star.png';

function ImageCarrousel({ images, cantStars }) {
  return (
    <div className="image-carrousel-container">
      <div className="image-carrousel-stars">
        {Array.from({ length: cantStars }).map((_, index) => (
          <img 
            key={index} 
            src={starIcon} 
            alt="Star" 
            className="star-icon" 
          />
        ))} 
      </div>
      <div className="image-carrousel-background">

      </div>    
      <div className="image-carrousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            className="carrousel-image"
          />
        ))}
      </div>
    </div>
    
  );
}

export default ImageCarrousel;