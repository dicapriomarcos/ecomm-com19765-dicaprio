import React , {useState} from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount/ItemCount'




export default function ItemDetail({item}) {

    const [add, setAdd] = useState(false)
    
    
    
    const onAdd = () => {

    setAdd(true)
    

    }

    return (
        <article className="single-product">
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="data">
            <h1>{item.title}</h1>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
            </div>
            <ItemCount onAdd={onAdd} add={add} initial={0} stock={item.stock}/>

        </article>
    )
}
