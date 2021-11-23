import React , {useState} from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount/ItemCount'
import AddToCart from './AddToCart/AddToCart'
import GoToCart from './GoToCart/GoToCart'
import { useCartContext } from '../../context/CartContext'




export default function ItemDetail({item}) {

    const [add, setAdd] = useState(false)

    const { cart, setCart } = useCartContext()

    const addItem = ( quantity) => {

        const index = cart.findIndex(i => i.id === item.id)

        if (index > -1 ) {
            const OldQuantity = cart[index].cantidad

            cart.splice(index, 1)
            setCart([...cart, {...item, cantidad: quantity + OldQuantity, subtotal: quantity * item.price}])  
        }else{
            setCart([...cart, {...item, cantidad: quantity, subtotal: quantity * item.price}])    
        }
        
        setAdd(true)

    }

    
    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {

        quantity < item.stock ? setQuantity(quantity + 1) : alert('Ya no hay stock')
        
    }

    const removeQuantity = () => {

        quantity > 0 ? setQuantity(quantity - 1) : alert('No puedes bajar de aquí')

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
            { add ? <GoToCart /> : <>
            <ItemCount initial={1} stock={item.stock} addQuantity={addQuantity} removeQuantity={removeQuantity} quantity={quantity}/>
            <AddToCart item={item} addItem={addItem} quantity={quantity}/> </>}
        </article>
    )
}
