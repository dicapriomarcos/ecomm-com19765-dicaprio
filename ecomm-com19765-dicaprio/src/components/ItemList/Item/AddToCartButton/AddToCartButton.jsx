import React from 'react'
import './addtocartbutton.css'


export default function AddToCartButton( {stock} ) {

    
    const buyNow = stock > 0 ? 'Comprar ahora' : 'Sin stock'
    const buyNowActiveClass = stock > 0 ? 'buy-now' : 'no-stock'
    const buttonStatus = stock < 1 ? true : false

    return (
        <button 
        className={buyNowActiveClass + ' addtocartbutton'}
        disabled={ buttonStatus }>
            {buyNow}
        </button>
    )
}
