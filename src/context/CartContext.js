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

    function removeItem(product) {
        const updatedCartList = state.cartList.filter(cartListProduct => cartListProduct.id !== product.id)
        
        dispatch({type: "REMOVE_ITEM", payload: {updatedCartList: updatedCartList}})
    }

    const value = {
        cartList: state.cartList,
        addItem,
        removeItem
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
