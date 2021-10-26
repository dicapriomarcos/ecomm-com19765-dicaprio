import React from 'react';
import './ItemListContainer.css'

export default function ItemListContainer(props) {
  return (
    <main id="item-list-container">
    <h2>{props.greeting}</h2>
    </main>
  );
}
