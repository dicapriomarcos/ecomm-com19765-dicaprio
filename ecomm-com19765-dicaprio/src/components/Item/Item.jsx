import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx'

export default function Item( {item} ) {
  return (
    <article>
          <h3>{item.title}</h3>
          <img src={item.image} alt="" />
          <h4>{item.price}</h4>
        <ItemCount initial={0} stock={item.stock} />
        <hr></hr>
    </article>
    
  );
}
