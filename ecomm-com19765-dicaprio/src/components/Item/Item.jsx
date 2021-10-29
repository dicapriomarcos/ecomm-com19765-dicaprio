import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx'

export default function Item() {
  return (
    <article>
        <div>
            Artículo prueba
        </div>
        <ItemCount initial={1} stock="5" />
    </article>
  );
}
