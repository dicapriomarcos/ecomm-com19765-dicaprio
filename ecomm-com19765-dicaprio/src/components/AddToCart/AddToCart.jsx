import React from 'react';

export default function AddToCart({quantity}) {

    const onAdd = () => {
        if(quantity > 0){
              alert(`Oye,  todavía no llegamos a esta clase, pero tienes ${quantity} ${quantity < 2 ? 'Item' : 'Items'} en tu carrito`)
        }
      
    }
  return (
    <div className="add-to-cart-button">
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}
