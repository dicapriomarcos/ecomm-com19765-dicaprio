import React, {useContext} from 'react'
import { useCartContext } from '../../context/CartContext'

export default function Carrito( ) {

    const {cart, removeItem, deleteCart} = useCartContext()

    return (
        <section>
            <h1>Página de carrito</h1>
                {cart.map(item => <li className=''
                    key={item.id}>
                    <span className='prodName'>{item.title}
                    </span> - Cantidad {item.cantidad}
                    <span>- Precio: {item.price}€ </span>
                    <button onClick={() => removeItem(item.id)}>Borrar Item</button>
                </li>
                )}
                <button onClick={() => deleteCart()}>Borrar todos los productos</button>
        </section>
    )
}
