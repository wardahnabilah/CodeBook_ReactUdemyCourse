import React from 'react'

export function cartReducer(state, action) {
    const {type, payload} = action
  
    switch(type) {
    case "ADD_ITEM":
        return {...state, cartList: [...state.cartList, payload.newProduct]}
    default:
        return
  }
}
