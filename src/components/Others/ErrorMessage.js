import React from 'react'

export function ErrorMessage() {

    return (
    <section className="w-11/12 mt-12 max-w-screen-xl mx-auto text-center text-red-600/80">
        <p>Oops, unable to load the data at the moment.</p>
        <p>Please try again later</p>
    </section>
  )
}
