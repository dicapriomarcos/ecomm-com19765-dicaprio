import {React, useState, useEffect} from 'react';
import items from '../ItemListContainer/items.json'
import ItemDetail from '../ItemDetail/ItemDetail';


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

    const [item, setItem] = useState([])


    useEffect( () => {
      getFetch.then(res => {
      setItem(items[2])
      })
    }, [])
  
    console.log(item)

    return (
        <main>
            <ItemDetail item={item} />
        </main>
    )
}
