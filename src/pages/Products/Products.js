import { ProductCard } from '../../components'
import { FilterBar } from './components/FilterBar'
import { useFetch, useDocTitle } from '../../hooks'
import { useSearchParams } from 'react-router-dom'

export function Products() {
    
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("q")

    const products = useFetch(`http://localhost:8000/products?name_like=${keyword ? keyword : ''}`)

    // Document title
    useDocTitle("CodeBook - Collections")

    return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left"> 
        <div className="mb-12 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">All eBooks ({products.length})</h1>
            <button className="bi bi-funnel-fill text-3xl px-4 hover:text-neutral-600 dark:hover:text-cyan-500 hover:cursor-pointer"></button>
        </div>
        <div className="flex flex-wrap">
            {products.length !== 0 ? products.map(product => {
                                        return <ProductCard 
                                                    key={product.id}
                                                    product={product}
                                                />}) : 
                                    <p className="text-xl mx-auto">No results for `{keyword}`</p>
            }
        </div>
        <FilterBar />
    </section>
  )
}
