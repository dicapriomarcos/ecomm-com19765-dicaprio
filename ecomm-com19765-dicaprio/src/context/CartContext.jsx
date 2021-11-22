import React , {useState, createContext, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const removeItem = (id) => {
        setCart(cart.filter((i)=> i.id != id))
    }

    const deleteCart = () => {
        setCart([])
    }


    return (   
    <CartContext.Provider value={
        { cart,
        setCart,
        deleteCart,
        removeItem }}>
        {children}
    </CartContext.Provider>
    )

}