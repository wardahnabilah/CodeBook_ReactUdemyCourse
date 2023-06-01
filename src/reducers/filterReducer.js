export function filterReducer(state, action) {
    const {type, payload} = action

    switch(type) {
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}
        
        case "SORT_BY":
            return {...state, sortBy: payload.sortBy}

        case "RATING":
            return {...state, rating: payload.rating}

        case "BEST_SELLER":
            return {...state, bestSeller: !state.bestSeller}

        case "INSTOCK":
            return {...state, inStock: !state.inStock}
        
        case "CLEAR_FILTERS":
            return {
                ...state,
                sortBy: null,
                rating: null,
                bestSeller: false,
                inStock: false
            }

        default:
            throw new Error("Error")
    }
}
