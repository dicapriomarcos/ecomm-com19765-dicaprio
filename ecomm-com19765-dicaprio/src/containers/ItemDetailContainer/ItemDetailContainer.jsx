import {React, useState, useEffect} from 'react';
import items from '../../assets/items.json'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading/Loading'


const getFetch = new Promise((res, rej) => {

    const condition = true
  
    if( condition ){
      setTimeout( () => {
        res(items)
      }, 2000)
    }else{
      setTimeout( () =>{
        rej('404 Not Found')
      }, 4000)
    }
  
  })

export default function ItemDetailContainer() {

    
    const { productId } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
      setLoading(true)
      getFetch.then(res => {
      setItem( items.find( item => item.id === productId ) )
      setLoading(false)
      })
    },[item, productId])

    return (
        
      <main className="item-detail-container">
        { loading ? <Loading /> : <ItemDetail item={item} />  }
      </main>
        

    )
}
