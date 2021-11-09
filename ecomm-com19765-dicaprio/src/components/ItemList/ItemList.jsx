import React from 'react'

import Item from '../Item/Item.jsx'

export default function ItemList({items}) {
    return (
        <div className="item-list-row">
            { items ? items.map( item => <Item item={item} />)  : <h6>No hay productos</h6> }
        </div>
    )
}
