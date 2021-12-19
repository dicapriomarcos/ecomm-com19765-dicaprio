import React from 'react';
import './itemcount.css'

export default function ItemCount({ removeQuantity, addQuantity, quantity = 1}) {

  return (
    <div className="add-to-cart-container">
        <div className="quantity-buttons">
            <button onClick={() => removeQuantity()}>
                -
            </button>
            <span>
                {quantity}
            </span>
            <button onClick={() => addQuantity()}>
                +
            </button>            
        </div>
    </div>

  );
}
