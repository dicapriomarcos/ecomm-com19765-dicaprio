import {React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import products from '../../assets/items.json'
import Loading from '../../components/Loading/Loading'
import { getFirestore } from '../../services/getFirestore';


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

    const query = getFirestore() // conexion con bbdd

    if( slug ){

      query.collection('items').where("marca" , "==", slug ).get().then(res => setItems( res.docs.map( item => ( { id: item.id ,...item.data() } )) ) ).catch( err => console.log(err) ).finally( () => setLoading(false) )

    }else{

      query.collection('items').get().then(res => setItems( res.docs.map( item => ( { id: item.id ,...item.data() } )) ) ).catch( err => console.log(err) ).finally( () => setLoading(false) )

    }

  }, [slug, items] )


  
  return (
    <main id="item-list-container">
    <h2>{props.greeting} { slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : ''}</h2>
    <section>
      { loading ? <Loading /> : <ItemList items={items} />}
    </section>
    
    </main>
  );
}
