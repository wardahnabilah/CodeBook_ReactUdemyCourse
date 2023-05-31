import { useState, useEffect } from "react"

export function useFetch(url) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchProducts() {
            const response = await fetch(url)
            const data = await response.json()

            setProducts(data)
        }

        fetchProducts()

    }, [url])
  
    return products
}
