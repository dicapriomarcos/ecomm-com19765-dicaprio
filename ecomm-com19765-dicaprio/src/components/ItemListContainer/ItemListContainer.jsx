import {React, useState, useEffect} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import products from './items.json'

const getFetch = new Promise((res, rej) => {

  const condition = true

  if( condition ){
    setTimeout( () => {
      res(products)
    }, 2000)
  }else{
    setTimeout( () =>{
      rej('404 Not Found')
    }, 4000)
  }

})

export default function ItemListContainer(props) {
  
  const [items, setItems] = useState([])


  useEffect( () => {
    getFetch.then(res => {
    setItems(products)
    })
  }, [items])

  console.log(products)
  
  return (
    <main id="item-list-container">
    <h2>{props.greeting}</h2>
    <ItemList items={items} />
    </main>
  );
}
