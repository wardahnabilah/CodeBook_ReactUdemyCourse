import React, { createContext, useReducer, useContext } from 'react'
import { cartReducer } from '../reducers'

const initialCart = {
    cartList: []
}

const CartContext = createContext(initialCart)

export function CartProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialCart)

    function addItem(product) {
        dispatch({type: "ADD_ITEM", payload: {newProduct: product}})
    }

    const value = {
        cartList: state.cartList,
        addItem
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
