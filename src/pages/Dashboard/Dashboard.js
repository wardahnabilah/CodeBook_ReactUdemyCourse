import React from 'react'
import { DashboardEmpty } from './components/DashboardEmpty'
import { DashboardList } from './components/DashboardList'

export function Dashboard() {
  
  
  return (
    <main className="w-11/12 md:w-8/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-[.6rem]">Dashboard</h1>
        <p className="mb-8 text-lg text-left text-slate-800/40 dark:text-slate-300/40 font-semibold tracking-widest uppercase">Order History (0)</p>
        <DashboardList />
        {/* <DashboardEmpty /> */}
    </main>
  )
}
