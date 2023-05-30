import React, { useState } from 'react'

export function FaqAccordion({id, question, answer}) {
    // State for accordion
    const [isOpen, setIsOpen] = useState(false)
  
    function openAnswer() {
        setIsOpen(!isOpen)
    }
  
    return (
    <div className="w-11/12 mx-auto">
        <div onClick={openAnswer} className="py-6 flex justify-between text-xl border-b-2 hover:cursor-pointer">
            <p>{question}</p>
            <i className={`bi ${isOpen ? "bi-chevron-up" :"bi-chevron-down"}`}></i>
        </div>
        <p className={`${isOpen ? "" : "hidden"} py-4 text-lg text-left text-neutral-500`}>
            {answer}
        </p>
    </div>
  )
}
