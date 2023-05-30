import React from 'react'
import { FaqAccordion } from './FaqAccordion';

export function Faq() {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
          "id": 4,
          "question": "Do you support International payments?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        }
    ];

    return (
        <section className="w-11/12 py-6 my-6 max-w-screen-xl mx-auto text-center border-2 ">
            <h1 className="mb-12 text-3xl font-semibold underline underline-offset-8">Question in mind?</h1>
            {faqs.map(faq => {
                return <FaqAccordion
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                        />
            })}
        </section>
    )
}
