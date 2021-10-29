import React from 'react';
import './ItemListContainer.css'
import Item from '../Item/Item.jsx'

export default function ItemListContainer(props) {
  return (
    <main id="item-list-container">
    <h2>{props.greeting}</h2>
      <div class="item-list-row">
        <Item />
      </div>
    </main>
  );
}
