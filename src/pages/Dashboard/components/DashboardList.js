import React from 'react'
import { DashboardCard } from './DashboardCard'

export function DashboardList() {
  return (
    <section className="flex flex-col gap-6 w-11/12 md:w-8/12 max-w-screen-xl mx-auto text-center">
        <DashboardCard />
        <DashboardCard />
    </section>
  )
}
