export function cartReducer(state, action) {
    const {type, payload} = action
  
    switch(type) {
    case "ADD_ITEM":
        return {...state, cartList: [...state.cartList, payload.newProduct]}
    case "REMOVE_ITEM":
        return {...state, cartList: payload.updatedCartList}
    case "TOTAL_PRICE":
        return {...state, totalPrice: payload.totalPrice}
    case "CLEAR_CART":
        return payload.initialCart
    default:
        throw new Error("Error")
  }
}
