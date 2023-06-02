import React, { createContext, useReducer, useContext } from 'react'
import { cartReducer } from '../reducers'

const initialCart = {
    cartList: []
}

const CartContext = createContext(initialCart)

export function CartProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialCart)

    const value = {
        cartList: state.cartList
    } 

    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}


export function useCartContext() {
    return useContext(CartContext)
}
