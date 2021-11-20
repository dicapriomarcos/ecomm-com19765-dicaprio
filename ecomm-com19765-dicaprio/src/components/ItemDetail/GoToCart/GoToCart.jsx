import React from 'react'
import { Link } from 'react-router-dom'

export default function GoToCart() {
    return (
        <div className="add-to-cart-button added">
            <Link to="/carrito" >Ver carrito</Link>
        </div>
    )
}
