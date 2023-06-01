export function filterReducer(state, action) {
    const {type, payload} = action

    switch(type) {
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}
        
        case "SORT_BY":
            return

        case "RATING":
            return {...state, rating: payload.rating}

        case "BEST_SELLER":
            return {...state, bestSeller: !state.bestSeller}

        case "INSTOCK":
            return {...state, inStock: !state.inStock}

        default:
            throw new Error("Error")
    }
}
