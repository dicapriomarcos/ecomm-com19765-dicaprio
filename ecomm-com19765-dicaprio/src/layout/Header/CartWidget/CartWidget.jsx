import React from 'react';
import shoppingCart from './shopping-cart.png'
import './cartwidget.css'

export default function CartWidget() {
  return (
    <div id="cart-widget">
        <img src={shoppingCart} alt="" />
    </div>
  );
}
