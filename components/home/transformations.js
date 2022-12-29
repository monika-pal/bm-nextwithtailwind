import React from 'react'

export default function transformations() {
  return (
    <div>
      <section className='relative py-sp-big pt-0'>
        <div className='container md:container lg:container mx-auto py-5 px-3 md:px-0 text-center'>
          <div className='flex flex-wrap '>
            <div className='w-1/2 pr-[20px] md:pl-0 md:w-full'>
              <h2 className='text-lg text-brand font-medium text-left mb-2'>Transformations</h2>
              <p className='text-textxl text-secondary font-regular items-center text-left leading-[41px] pr-2 mb-[40px]'>
                Moglix enables supply chain efficiency through vendor managed inventory holding for a <br /> <strong> leading tire manufacturer</strong>
              </p>
              <p className='text-left text-base2 font-regular mb-[40px]'>
                Established in 1977, our client is a leading tire manufacturer. With 7 plants across India and Europe that manufacture tires for its 6 diverse product categories, the company operates a complex and large-scale upstream supply chain.
              </p>
              <p className='text-left text-base2 font-regular'>Our expert solution helped customer achieve <strong> 3% savings </strong> on total cost of ownership</p>
              <div className='flex'>
                <button className='text-center justify-center items-center font-bold lg:text-base text-base text-white bg-brand h-[50px] flex shadow-red-btn-shadow hover:bg-brandhover mt-10 px-[20px] py-[15px] mr-1'>
                  <img src="/assets/img/pdf.svg" class="img-fluid mr-2 w-[9%]" alt="" /> Download Full Case Study
                </button>
                <button className='text-center justify-center border-2 border-brand items-center font-bold lg:text-base text-brand  h-[50px] flex shadow-red-btn-shadow hover:bg-brand hover:text-white  mt-10 px-[20px] py-[15px]'>
                  Read More Success Stories
                </button>
              </div>
            </div>
            <div className='w-1/2 px-[20px] md:w-full md:mt-6 md:px-0'>
              <div className="relative transformation-img-section before:bg-[url('/assets/img/transformation.png')] before:bg-no-repeat before:bg-contain pl-[80px] pb-[80px] before:left-0 before:bottom-3 before:absolute before:top-0 before:right-0 before:z-0">
                  <img src="/assets/img/transformationimage.png" className='z-1 relative'  alt=""/>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
