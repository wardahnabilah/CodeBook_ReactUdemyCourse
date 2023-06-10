import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loading, ProductCard } from '../../components'
import { FilterBar } from './components/FilterBar'
import { useDocTitle } from '../../hooks'
import { useFilterContext } from '../../context'
import { getProducts } from '../../services'
import { ErrorMessage } from '../../components'

export function Products() {
    const { allProducts, productList:products } = useFilterContext()
    const [openFilter, setOpenFilter] = useState(false) 
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("q")

    useEffect(()=>{
        async function fetchProducts() {
            try {
                const data = await getProducts(keyword)
                allProducts(data)
                
                setIsLoading(false)
                setIsError(false)
            } 
            catch {
                setIsLoading(false)
                setIsError(true)
            }
        }

        fetchProducts()        
    },[keyword]) //eslint-disable-line

    // Document title
    useDocTitle("CodeBook - Collections")
    

    return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left"> 
        <div className="mb-12 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">All eBooks ({products.length})</h1>
            <button onClick={() => {setOpenFilter(!openFilter)}} className="bi bi-funnel-fill text-3xl px-4 hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></button>
        </div>
        <div className="flex flex-wrap">
            {isLoading ? <Loading /> : 
                (isError ? <ErrorMessage/> :
                       (products.length !== 0 ? 
                            products.map(product => <ProductCard key={product.id} product={product}/>) : 
                            <p className="text-xl mx-auto py-12">No results for `{keyword}`</p>)
            )}
        </div>
        {openFilter && <FilterBar setOpenFilter={setOpenFilter}/>}
    </section>
  )
}
