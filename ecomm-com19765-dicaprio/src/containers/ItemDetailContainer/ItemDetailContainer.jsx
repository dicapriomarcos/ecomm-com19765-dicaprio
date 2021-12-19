import {React, useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading/Loading'
import { getFirestore } from '../../services/getFirestore';

export default function ItemDetailContainer() {

    
    const { productId } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
    
    const dbQuery = getFirestore() // conexion con bbdd

    dbQuery.collection('items').doc(productId).get()
    .then(res => setItem( { id: res.id ,...res.data() } ) ).catch( err => console.log(err) ).finally( () => setLoading(false) )
    },[item, productId, loading])

    return (
        
      <main className="item-detail-container">
        { loading ? <Loading /> : <ItemDetail item={item} />  }
      </main>
        

    )
}
