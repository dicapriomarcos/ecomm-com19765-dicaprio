import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './carrito.css'
import firebase from "firebase";
import "firebase/firestore"
import { getFirestore } from '../../services/getFirestore';

export default function Carrito( ) {
    
    const {cart, removeItem, deleteCart} = useCartContext()
    const [orderId, setOrderId] = useState()
    const [formData, setFormData] = useState({})
    const cartTotal = Object.values(cart).reduce((q, {subtotal}) => q + subtotal, 0)

    const handleChange = e => {

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

    const checkEmail = e => {

        alert('hola')

    }

        const checkout = event => {

            event.preventDefault()

            if( document.getElementById('form-email').value ===  document.getElementById('form-email-confirm').value ){
    
                let order = {}
                order.buyer = 
                    {
                        'name' : formData.name,
                        'phone' : formData.phone,
                        'email' : formData.email
                    }
                order.items = cart.map( item => {

                        const id = item.id
                        const title = item.title
                        const price = item.price
                        const quantity = item.cantidad
                        const subtotal = item.subtotal
            
                        return {id, price, quantity, subtotal, title}
                })
                order.total = cartTotal
                order.date = firebase.firestore.Timestamp.fromDate( new Date() )

                const saveOrder = getFirestore()
                saveOrder.collection('orders').add(order)
                .then(res => {
                    setOrderId(res.id)
                    document.getElementById('checkout-wrapper').style.display = 'none'
                } )
                .catch(err => console.log(err) )              

            }else{

                document.getElementById('error-confirm-email').style.display = 'block'

            }

        }

    return (
        <section id="cart-page">
            <h1>Carrito</h1>
            { cartTotal > 0 ?
                <>
                <div id="cart-items-wrapper">
                    <div className="item-cart-row header">
                        <div className="title"> Producto </div>
                        <div className="quantity"> Cantidad </div>
                        <div className="price"> Precio </div>
                        <div className="subtotal"> Subtotal </div>
                        <div className="controls">Opciones</div>
                    </div>
                    {cart.map(item =>
                    
                    <div className="item-cart-row" key={item.id}>
                        <div className="title">{item.title} </div>
                        <div className="quantity">{item.cantidad} </div>
                        <div className="price">{item.price}€ </div>
                        <div className="subtotal">{item.subtotal}€ </div>
                        <div className="controls"><button onClick={() => removeItem(item.id)}>Borrar Item</button></div>
                    </div>

                    )}
                    <button onClick={() => deleteCart()}>Borrar todos los productos</button>
                    <div>
                        Total: { cartTotal }€
                    </div>                    
                </div>
      
                <div id="checkout-wrapper">
                    <h2>Checkout</h2>
                    <div id="cart-checkout-wrapper">
                        
                        <form onSubmit={checkout} id="form-checkout">
                            <label htmlFor="name">
                                <input type="text" name="name" placeholder="Nombre*" onChange={handleChange } required/>
                            </label>
                            <label htmlFor="phone">
                                <input type="tel" name="phone" placeholder="Teléfono*" onChange={handleChange } required/>
                            </label>
                            <label htmlFor="email">
                                <input id="form-email" type="email" name="email" placeholder="E-mail*" onChange={handleChange } required/>
                            </label>
                            <label htmlFor="email-confirm">
                                <input type="email" id="form-email-confirm" name="email-confirm" placeholder="Confirmar E-mail*"  required/>
                                <div id="error-confirm-email" class="form-error">
                                    Los correos electronicos no son iguales.
                                </div>
                            </label>
                            
                            <input type="submit" value="Finalizar Compra" />
                        </form>
                    </div>
                </div>
                
                { orderId && <div class="order-success">Gracias, tu compra se registro de manera exitosa con el identificador: {orderId}  </div>}
                
                </>       
            : <div> <h4>No hay productos en tu carrito</h4> <Link to="/">Ir al catalogo</Link> </div>}  
        </section>
    )
}
