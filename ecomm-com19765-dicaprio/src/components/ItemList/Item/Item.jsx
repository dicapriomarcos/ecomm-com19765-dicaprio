import React from 'react';
import './item.css'
import StockBadge from '../../StockBadge/StockBadge';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import { Link } from "react-router-dom";

export default function Item( {item} ) {
  return (
    <div className="item-container">
      <article className="item">
            <h3 className="title">{item.title}</h3>
            <img src={item.image} alt="" />
            <h4 className="price">{item.price}</h4>
            { item.stock < 6 ?  <StockBadge quantity={item.stock} /> : '' }
            <Link to={`/producto/${item.id}`}  item={item}>
            <AddToCartButton stock={item.stock}/>
            </Link>
      </article>      
    </div>

    
  );
}
