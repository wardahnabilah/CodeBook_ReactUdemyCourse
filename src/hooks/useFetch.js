import { useState, useEffect } from "react"
import { useFilterContext } from "../context"

export function useFetch(url) {
    const {productList, allProducts} = useFilterContext()

    useEffect(()=>{
        async function fetchProducts() {
            const response = await fetch(url)
            const data = await response.json()

            allProducts(data)
        }

        fetchProducts()

    }, [url])
  
    return productList
}
