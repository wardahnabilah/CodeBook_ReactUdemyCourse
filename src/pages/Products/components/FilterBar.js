import { useFilterContext } from "../../../context/FilterContext"

export function FilterBar({ setOpenFilter }) {
    const { state, dispatch } = useFilterContext()
    
    return (
        <div className="fixed top-0 right-0 w-6/12 max-w-[25rem] h-screen shadow-lg bg-white dark:bg-slate-700 text-left px-4">
            <div className="flex justify-between items-center border-b-2 pt-8 pb-3">
                <h4 className="text-xl text-gray-400 font-bold uppercase">FILTERS</h4>
                <button onClick={()=>{setOpenFilter(false)}} className="bi bi-x-lg"></button>
            </div>
            <ul className="flex flex-col">
                {/* Sort by */}
                <li className="p-2">
                    <h5 className="mb-1 text-lg font-semibold">Sort By</h5>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>{dispatch({type: "SORT_BY", payload: {sortBy: "LOWTOHIGH"}})}} checked={state.sortBy === "LOWTOHIGH"} id="lowToHigh" name="sortBy" type="radio" />
                        <label htmlFor="lowToHigh">Price - Low to High</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>{dispatch({type: "SORT_BY", payload: {sortBy: "HIGHTOLOW"}})}} checked={state.sortBy === "HIGHTOLOW"} id="HighToLow" name="sortBy" type="radio" />
                        <label htmlFor="lowToHigh">Price - High to Low</label>
                    </div>
                </li>

                {/* Rating */}
                <li className="p-2">
                    <h5 className="mb-1 text-lg font-semibold">Rating</h5>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>dispatch({type: "RATING", payload: {rating: "FOURSTARSABOVE"}})} checked={state.rating === "FOURSTARSABOVE"} id="fourStars" name="rating" type="radio" />
                        <label htmlFor="fourStars">4 Stars & Above</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>dispatch({type: "RATING", payload: {rating: "THREESTARSABOVE"}})} checked={state.rating === "THREESTARSABOVE"} id="threeStars" name="rating" type="radio" />
                        <label htmlFor="threeStars">3 Stars & Above</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>dispatch({type: "RATING", payload: {rating: "TWOSTARSABOVE"}})} checked={state.rating === "TWOSTARSABOVE"} id="twoStars" name="rating" type="radio" />
                        <label htmlFor="twoStars">2 Stars & Above</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>dispatch({type: "RATING", payload: {rating: "ONESTARSABOVE"}})} checked={state.rating === "ONESTARSABOVE"} id="oneStar" name="rating" type="radio" />
                        <label htmlFor="oneStar">1 Star & Above</label>
                    </div>
                </li>

                {/* Other Filters */}
                <li className="p-2">
                    <h5 className="mb-1 text-lg font-semibold">Other Filters</h5>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>{dispatch({type: "BEST_SELLER"})}} checked={state.bestSeller} id="bestSeller" name="otherFilters" type="checkbox" />
                        <label htmlFor="bestSeller">Best Seller Only</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onChange={()=>{dispatch({type: "INSTOCK"})}} checked={state.inStock} id="instock" name="otherFilters" type="checkbox" />
                        <label htmlFor="instock">Instock Only</label>
                    </div>
                </li>

                <button className="mt-6 py-2 border-2 rounded-lg">Clear Filter</button>
            </ul>
        </div>
  )
}
