import {React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading'
import { getFirestore } from '../../services/getFirestore';


export default function ItemListContainer(props) {

  const { slug } = useParams()
  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {

    const firestore = getFirestore() // conexion con bbdd

    const dbQuery = slug ?  firestore.collection('items').where("marca" , "==", slug ) : firestore.collection('items')
    dbQuery.get().then(res => setItems( res.docs.map( item => ( { id: item.id ,...item.data() } )) ) ).catch( err => console.log(err) ).finally( () => setLoading(false) )

  }, [slug, items, loading] )


  
  return (
    <main id="item-list-container">
    <h2>{props.greeting} { slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : ''}</h2>
    <section>
      { loading ? <Loading /> : <ItemList items={items} />}
    </section>
    
    </main>
  );
}
