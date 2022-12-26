import React, { Component } from 'react'

export default function whoWeAre() {
  return (
    <div>
      <div className="container-none md:container lg:container mx-auto py-sp-big px-3">
        <div className="flex">
          <div className="w-2/5">
            <h2 className='text-headingSmall font-medium mb-[40px] text-brand'>
              Who we are
            </h2>
            <p className='text-heading2 text-secondary font-semibold'>Moglix is an end-to end supply chain solution company focused on tech-enabled MRO sourcing, custom manufacturing procurement and infrastructure industry supplies.</p>
          </div>
          <div className="w-3/5  pl-[200px] ">
           <p className='mt-[60px] mb-[15px] lg:text-xxl text-xl'>From efficient manufacturing plants, resilient supply chains, and smarter buildings, to smoother and efficient procurement, we enable enterprises to focus on what they do best.</p>
           <p className="lg:text-xxl text-xl">By coalescing the real and the virtual worlds, we empower businesses to transform their operations and distribution helping them touch billions of lives everyday.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
