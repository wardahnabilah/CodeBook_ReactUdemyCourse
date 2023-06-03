import { useState, useEffect } from "react"

export function useFetch(url, options) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchProducts() {
            const response = await fetch(url, options)
            const data = await response.json()

            setProducts(data)
        }

        fetchProducts()

    }, [url])
  
    return products
}
