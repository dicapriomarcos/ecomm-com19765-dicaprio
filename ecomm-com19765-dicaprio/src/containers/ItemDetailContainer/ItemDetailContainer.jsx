import {React, useState, useEffect} from 'react';
import items from '../../assets/items.json'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom"




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
    
    useEffect( () => {
      getFetch.then(res => {
      setItem( items.find( item => item.id === productId ) )
      })
    },[item, productId])

    return (
        
          <main className="item-detail-container">
            { item ? <ItemDetail item={item} /> : 'Obteniendo datos...'}
        </main>
        

    )
}
