import React from 'react'
import './itemlist.css'
import Item from './Item/Item.jsx'

export default function ItemList({items}) {
    return (
        <div className="item-list-row">
            { items ? items.map( item => <Item item={item} key={item.id} />)  : <h6>No hay productos</h6> }
        </div>
    )
}
