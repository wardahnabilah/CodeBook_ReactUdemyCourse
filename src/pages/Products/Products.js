import { ProductCard } from '../../components'
import { FilterBar } from './components/FilterBar'

export function Products() {
    return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center lg:text-left"> 
        <div className="mb-12 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">All eBooks (15)</h1>
            <button className="bi bi-funnel-fill text-3xl px-4"></button>
        </div>
        <div className="flex flex-wrap">
            <ProductCard />
        </div>
        <FilterBar />
    </section>
  )
}
