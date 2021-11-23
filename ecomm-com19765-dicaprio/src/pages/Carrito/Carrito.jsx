import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './carrito.css'

export default function Carrito( ) {

    const {cart, removeItem, deleteCart} = useCartContext()

    const cartTotal = Object.values(cart).reduce((q, {subtotal}) => q + subtotal, 0)

    return (
        <section id="cart-page">
            <h1>Carrito</h1>
            { cartTotal > 0 ? 
                <div id="cart-items-wrapper">
                    <div className="item-cart-row header">
                        <div className="title"> Producto </div>
                        <div className="quantity"> Cantidad </div>
                        <div className="price"> Precio </div>
                        <div className="subtotal"> Subtotal </div>
                        <div className="controls">Opciones</div>
                    </div>
                    {cart.map(item =>
                    
                    <div className="item-cart-row" key={item.id}>
                        <div className="title">{item.title} </div>
                        <div className="quantity">{item.cantidad} </div>
                        <div className="price">{item.price}€ </div>
                        <div className="subtotal">{item.subtotal}€ </div>
                        <div className="controls"><button onClick={() => removeItem(item.id)}>Borrar Item</button></div>
                    </div>

                    )}
                    <button onClick={() => deleteCart()}>Borrar todos los productos</button>
                    <div>
                        Total: { cartTotal }€
                    </div>                    
                </div>            
            : <div> <h4>No hay productos en tu carrito</h4> <Link to="/">Ir al catalogo</Link> </div>}  
        </section>
    )
}
