import React from 'react'
import './addtocartbutton.css'


export default function AddToCartButton( {onAdd , stock} ) {

    
    const buyNow = stock > 0 ? 'Comprar ahora' : 'Sin stock'
    const buyNowActiveClass = stock > 0 ? 'buy-now' : 'no-stock'
    const buttonStatus = stock < 1 ? true : false

    return (
        <button onClick={onAdd}
        className={buyNowActiveClass + ' addtocartbutton'}
        disabled={ buttonStatus }>
            {buyNow}
        </button>
    )
}
