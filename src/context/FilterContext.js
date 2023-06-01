import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const initialFilterValue = {
    productList: [],
    sortBy: null,
    rating: null,
    bestSeller: false,
    inStock: false
}

const FilterContext = createContext(initialFilterValue)

export function FilterProvider({ children }) {
    const [state, dispatch] = useReducer(filterReducer, initialFilterValue)

    function allProducts(productsFromAPI) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {products: productsFromAPI}
        })
    }

    function bestSeller(products) {
        if(state.bestSeller === true) {
            return products.filter(product => product.best_seller === true)
        }

        return products
    }

    const filteredProducts = bestSeller(state.productList)

    const value = {
        productList: filteredProducts,
        allProducts,
        dispatch
    }

    return  <FilterContext.Provider value={value}>
                {children}
            </FilterContext.Provider>
}

export function useFilterContext() {
    return useContext(FilterContext)
}