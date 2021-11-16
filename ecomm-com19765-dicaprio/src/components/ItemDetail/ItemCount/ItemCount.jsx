import React, {useState} from 'react';
import './itemcount.css'
import AddToCart from './AddToCart/AddToCart.jsx'




export default function ItemCount({onAdd, add, initial, stock}) {

    const [quantity , setQuantity] = useState(initial)

    const addQuantity = () => {

        quantity < stock ? setQuantity(quantity + 1) : alert('Ya no hay stock')
        
    }

    const removeQuantity = () => {

        quantity > initial ? setQuantity(quantity - 1) : alert('No puedes bajar de aquí')

    }

  return (
    <div className="add-to-cart-container">
        <div className="quantity-buttons">
            <button onClick={removeQuantity}>
                -
            </button>
            <span>
                {quantity}
            </span>
            <button onClick={addQuantity}>
                +
            </button>            
        </div>
        <AddToCart onAdd={onAdd} add={add} quantity={quantity} />
    </div>

  );
}
