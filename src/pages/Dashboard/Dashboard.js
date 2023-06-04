import React from 'react'
import { DashboardEmpty } from './components/DashboardEmpty'
import { DashboardList } from './components/DashboardList'
import { useFetch } from '../../hooks'

export function Dashboard() {
    const userId = sessionStorage.getItem("id")
    const userToken = sessionStorage.getItem("token") 
    const orders = useFetch(`http://localhost:8000/660/orders?user.id=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        }
    })

    return (
        <main className="w-11/12 md:w-8/12 py-12 max-w-screen-xl mx-auto text-center">
            <h1 className="mb-12 text-3xl font-semibold underline underline-offset-[.6rem]">Dashboard</h1>
            <p className="mb-8 text-lg text-left text-slate-800/40 dark:text-slate-300/40 font-semibold tracking-widest uppercase">Order History ({orders.length})</p>
            {orders.length ? <DashboardList orders={orders} /> : <DashboardEmpty />}
        </main>
    )
}
