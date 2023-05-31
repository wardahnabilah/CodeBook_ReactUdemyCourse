import React from 'react'

export function Testimonials() {
  return (
    <section className="w-11/12 py-12 max-w-screen-xl mx-auto text-center">
        <h1 className="mb-12 text-3xl font-semibold underline underline-offset-4">Student About CodeBook</h1>
        <div className="grid md:grid-cols-2 border-2">
            {/* Testimonial 1*/}
            <div className="p-10 flex flex-col justify-center gap-3 border-b-2">
                <h3 className="text-[1.3rem] font-semibold">Very easy this was to integrate</h3>
                <p className="text-lg text-neutral-500">"If you care for your time, I hands down would go with this."</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="" />
                    <div className="flex flex-col text-left">
                        <span className="text-lg font-medium">Bonnie Green</span>
                        <span className="text-neutral-500">Developer at Random AI</span>
                    </div>
                </div>
            </div>

            {/* Testimonial 2*/}
            <div className="p-10 flex flex-col justify-center gap-3 border-b-2 md:border-l-2">
                <h3 className="text-[1.3rem] font-semibold">Solid foundation for any project</h3>
                <p className="text-lg text-neutral-500">"Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="" />
                    <div className="flex flex-col text-left">
                        <span className="text-lg font-medium">Roberta Casas</span>
                        <span className="text-neutral-500">Lead designer at Random</span>
                    </div>
                </div>
            </div>

            {/* Testimonial 3*/}
            <div className="p-10 flex flex-col justify-center gap-3 border-b-2  md:border-b-0">
                <h3 className="text-[1.3rem] font-semibold">Mindblowing workflow</h3>
                <p className="text-lg text-neutral-500">"Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="" />
                    <div className="flex flex-col text-left">
                        <span className="text-lg font-medium">Jese Leos</span>
                        <span className="text-neutral-500">Software Engineer at Random</span>
                    </div>
                </div>
            </div>

            {/* Testimonial 4*/}
            <div className="p-10 flex flex-col justify-center gap-3 md:border-l-2">
                <h3 className="text-[1.3rem] font-semibold">Efficient Collaborating</h3>
                <p className="text-lg text-neutral-500">"You have many examples that can be used to create a fast prototype for your team."</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="" />
                    <div className="flex flex-col text-left">
                        <span className="text-lg font-medium">Joseph McFall</span>
                        <span className="text-neutral-500">CTO at Random</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
