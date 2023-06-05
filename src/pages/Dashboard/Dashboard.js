import React, {useEffect, useState} from 'react'
import { DashboardEmpty } from './components/DashboardEmpty'
import { DashboardList } from './components/DashboardList'
import { useDocTitle } from '../../hooks'
import { getUserOrders } from '../../services'
import { ErrorMessage, Loading } from '../../components'

export function Dashboard() {
    const [orders, setOrders] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        async function getOrders() {
            try {
                const data = await getUserOrders()
                setOrders(data)

                setIsLoading(false)
                setIsError(false)
            } 
            catch {
                setIsLoading(false)
                setIsError(true)
            }
        }

        getOrders()
    }, [])

    useDocTitle("Dashboard - CodeBook")

    return (
        <main className="w-11/12 md:w-8/12 py-12 max-w-screen-xl mx-auto text-center">
            <h1 className="mb-12 text-3xl font-semibold underline underline-offset-[.6rem]">Dashboard</h1>
            <p className="mb-8 text-lg text-left text-slate-800/40 dark:text-slate-300/40 font-semibold tracking-widest uppercase">Order History ({orders.length})</p>
            {isLoading ? <Loading /> :
                (isError ? <ErrorMessage /> :
                       (orders.length ? <DashboardList orders={orders} /> : <DashboardEmpty />))}
        </main>
    )
}
