export default function filterReducer(state, action) {
    const {type, payload} = action

    switch(type) {
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}
        
        case "SORT_BY":
            return

        case "RATING":
            return

        case "BEST_SELLER":
            return

        case "INSTOCK":
            return

        default:
            throw new Error("Error")
    }
}
