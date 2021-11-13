import {React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import products from '../../assets/items.json'

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

  const { slug } = useParams()
  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)


 useEffect( () => {

    setLoading(true)

    if(slug){

      getFetch.then(res => {
        setItems( products.filter( prod => prod.marca.toLowerCase() === slug ) )
        })
        .catch( err => console.log(err) )
        .finally(() => setLoading(false) )

    }else{

        getFetch.then(res => {
          setItems( products )
          })
          .catch( err => console.log(err) )
          .finally(() => setLoading(false) )

    }
  }, [slug] )

  
  return (
    <main id="item-list-container">
    <h2>{props.greeting} { slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : ''}</h2>
    { loading ? 'Cargando productos...' : <ItemList items={items} />}
    </main>
  );
}
