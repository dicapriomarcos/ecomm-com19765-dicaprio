import React from 'react';
import { Link } from "react-router-dom";

export default function AddToCart({onAdd , add,  quantity}) {


  return ( <> { add ? 
    <div className="add-to-cart-button added">
      <Link to="/carrito" onClick={onAdd}>Ver carrito</Link>
    </div>:
    <div className="add-to-cart-button">
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  } </>);
}
