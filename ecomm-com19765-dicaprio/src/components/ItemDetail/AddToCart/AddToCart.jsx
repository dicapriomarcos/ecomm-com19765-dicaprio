import React from 'react';

export default function AddToCart({onAdd}) {


  return (
    <div className="add-to-cart-button">
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}
