import React from 'react'
import './stockbadge.css'

export default function StockBadge( {quantity} ) {

    const quantityText = ( parseInt(quantity) === 1 ) ? `¡Última unidad!` : `¡Quedan ${quantity} unidades!`;
    const badgeColor = ( parseInt(quantity) === 1 ) ? 'badge-red' : 'badge-yellow';


    return (
        <span className={`quantity-badge ${badgeColor}`}>
            {quantityText}
        </span>
    )
}
