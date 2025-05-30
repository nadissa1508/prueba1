function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="quantity-selector">
      <button
        className="minus-btn"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="quantity-input"
      />
      <button
        className="plus-btn"
        onClick={() => {
          if (quantity < 9) setQuantity(quantity + 1);
        }} 
        disabled = {quantity >= 9}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;