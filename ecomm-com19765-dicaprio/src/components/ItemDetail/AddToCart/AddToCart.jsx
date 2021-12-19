import React from 'react';

export default function AddToCart({addItem, quantity}) {
  
  return (
    <div className="add-to-cart-button">
        <button onClick={ () => addItem(quantity)}>Finalizar compra</button>
    </div>
  );
}
