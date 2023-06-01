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

    function bestSellerFilter(products) {
        if(state.bestSeller === true) {
            return products.filter(product => product.best_seller === true)
        }

        return products
    }

    function inStockFilter(products) {
        if(state.inStock === true) {
            return products.filter(product => product.in_stock === true )
        }

        return products
    }

    function ratingFilter(products) {
        if(state.rating === "FOURSTARSABOVE") {
            return products.filter(product => product.rating >= 4)
        }

        else if(state.rating === "THREESTARSABOVE") {
            return products.filter(product => product.rating >= 3)
        }

        else if(state.rating === "TWOSTARSABOVE") {
            return products.filter(product => product.rating >= 2)
        }

        else if(state.rating === "ONESTARSABOVE") {
            return products.filter(product => product.rating >= 1)
        }

        return products
    }

    function sortByFilter(products) {
        if(state.sortBy === "LOWTOHIGH") {
            return products.sort((a, b) => a.price - b.price)
        }

        else if(state.sortBy === "HIGHTOLOW") {
            return products.sort((a, b) => b.price - a.price)
        }

        return products
    }

    const filteredProducts = sortByFilter(ratingFilter(inStockFilter(bestSellerFilter(state.productList))))

    const value = {
        productList: filteredProducts,
        allProducts,
        state,
        dispatch
    }

    return  <FilterContext.Provider value={value}>
                {children}
            </FilterContext.Provider>
}

export function useFilterContext() {
    return useContext(FilterContext)
}