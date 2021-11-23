import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from './shopping-cart.png'
import './cartwidget.css'
import {useCartContext} from '../../../context/CartContext'


export default function CartWidget() {

  const {cart} = useCartContext()

  const cartCount = Object.values(cart).reduce((q, {cantidad}) => q + cantidad, 0)

  return (
    <div id="cart-widget">
      <Link to="/carrito" className="cart-wrapper">
          <img src={shoppingCart} alt="" />
          { cart.length > 0 ? <span className="cart-count">{ cartCount }</span> : ''}
      </Link>  
    </div>
    
  );
}
