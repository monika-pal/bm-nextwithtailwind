import React, { Component } from 'react'

export default function whoWeAre() {
  return (
    <div>
      <nav className="container-none md:container lg:container mx-auto py-5 px-3">
        <div className="flex">
          <div className="w-2/5">
            <h2 className='text-headingSmall font-medium mb-[40px] text-brand'>
              Who we are
            </h2>
            <p className='text-xl font-semibold'>Moglix is an end-to end supply chain solution company focused on tech-enabled MRO sourcing, custom manufacturing procurement and infrastructure industry supplies.</p>
          </div>
          <div className="w-3/5 px-6">
           <p className='mt-[30px] mb-[15px]'>From efficient manufacturing plants, resilient supply chains, and smarter buildings, to smoother and efficient procurement, we enable enterprises to focus on what they do best.</p>
           <p>By coalescing the real and the virtual worlds, we empower businesses to transform their operations and distribution helping them touch billions of lives everyday.</p>
          </div>
        </div>
      </nav>
    </div>
  )
}
