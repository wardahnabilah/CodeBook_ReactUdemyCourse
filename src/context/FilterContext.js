import { createContext, useContext } from "react";

const initialFilterValue = {
    productList: [],
    sortBy: null,
    rating: null,
    bestSeller: false,
    inStock: false
}

const FilterContext = createContext(initialFilterValue)

export function FilterProvider({ children }) {
    const value={
        productList: state.productList,
    }

    return  <FilterContext.Provider value={value}>
                {children}
            </FilterContext.Provider>
}

export function useFilterContext() {
    return useContext(FilterContext)
}