import React, { Component } from 'react'

export default function whoWeAre() {
  return (
    <div>
      <div className="container md:container lg:container mx-auto py-sp-big px-3 md:px-0">
        <div className="flex sm:flex-wrap">
          <div className="lg:w-2/5 md:w-1/2 sm:w-full">
            <h2 className='text-headingSmall font-medium mb-[20px] text-brand'>
              Who we are
            </h2>
            <p className='md:text-textxl md:leading-[45px] text-heading2 text-secondary font-medium pr-[20px] leading-[52px] sm:text-lg sm:leading-[34px]'>Moglix is an end-to end supply chain solution company focused on tech-enabled MRO sourcing, custom manufacturing procurement and infrastructure industry supplies.</p>
          </div>
          <div className="lg:w-3/5 lg:pl-[200px] lg:pr-[50px] md:w-1/2 md:pl-[50px] md:pr-0 sm:w-full">
           <p className='mt-[40px] mb-[20px] text-lg leading-10 md:text-base2 md:leading-8'>From efficient manufacturing plants, resilient supply chains, and smarter buildings, to smoother and efficient procurement, we enable enterprises to focus on what they do best.</p>
           <p className="text-lg leading-10 md:text-base2 md:leading-8">By coalescing the real and the virtual worlds, we empower businesses to transform their operations and distribution helping them touch billions of lives everyday.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
