import React, { Component } from 'react';
import Socialicons from '../components/shared/socialicons';
import Subscribe from '../components/shared/subscribe';
import Link from 'next/link';
import Contactform from '../components/shared/contactform';

const Footer =() =>{
const navigation = {
industries: [
      { name: 'Auto & Ancillary ', href: '#' },
      { name: 'Cement Chemicals ', href: '#' },
      { name: 'FMCG', href: '#' },
      { name: 'Metal & Mining', href: '#' },
      { name: 'Oil & Gas', href: '#' },
      { name: 'Pharmaceuticals', href: '#' },
      { name: 'Fashion ', href: '#' },
      { name: 'Renewables', href: '#' },
    ],
    solutions: [
      { name: 'Optimise Procurement', href: '#' },
      { name: 'Supplychain financing', href: '#' },
      { name: 'Distribution Optimisation', href: '#' },
      { name: 'Digital Transformation', href: '#' },
      { name: 'Custom Manufacturing', href: '#' },
      { name: 'Loyalty', href: '#' },
    ],
    optimize:[
      { name: 'MRO', href: '#' },
      { name:'Packaging', href:'#'},
      { name:'Infra & EPC', href:'#'},
      { name:'Vendor Consolidation', href:'#'},
      { name:'Use and Pay', href:'#'},
      { name:'Procurement as a Solution', href:'#'},
      { name:'Mid Market Solutions', href:'#'},
      { name:'Infrastructure and EPC', href:'#'}
    ],
    digital:[
      { name: 'Marketplace ', href: '#' },
      { name:'Enterprise (SME/MSME)', href:'#'},
      { name:'SaaS', href:'#'},
      { name:'MaaS', href:'#'},
      { name:'Tender', href:'#'},
      { name:'Finance', href:'#'},
    ],
    resources:[
      { name: 'Blogs  ', href: '#' },
      { name:'Case', href:'#'},
      { name:'Studies ', href:'#'},
      { name:'Webinars ', href:'#'},
      { name:'Press', href:'#'},
      { name:'Releases', href:'#'},
      { name:'Events', href:'#'},
      { name:'Video', href:'#'},
    ]
   }
    

 
    return (
      <footer className="bg-graybg pt-sp-big relative">
        <div className="container-none md:container lg:container mx-auto px-3 md:px-0">
            <div className='w-full flex sm:flex-wrap bg-white shadow-xl lg:max-w-[1454px] max-w-[90%] md:max-w-full sm:max-w-full mx-auto px-6 md:px-3 sm:px-3 py-6'>
              <div className='w-2/5  sm:w-full'>
                  <h3 className='text-xl text-brand font-bold mb-1'>Contact</h3>
                  <p className='lg:text-base text-sm text-secondary w-4/6'>We are ready to lead you into the future of B2B commerce and Supply Chain.</p>
                  <div className='flex items-start mt-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className='mt-[5px]'><path fill="none" d="M0 0h24v24H0z"/><path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"/></svg>
                    <div className='ml-1'>
                      <span className='block text-sm text-secondary'>Write to us at</span>
                      <a className='text-base text-secondary underline' href="mailto:info@moglixbusiness.com">info@moglixbusiness.com</a>
                    </div>
                  </div>
                  <h4 className='mt-3 text-base2 font-medium'>India</h4>
                  <div className='flex items-start mt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className='mt-[5px]'><path fill="none" d="M0 0h24v24H0z"/><path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488v-2.074zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                      <div className='ml-1'>
                        <span className='text-base text-secondary'>Smartworks Corporate Park (Tower B),</span>
                        <p className='text-base text-secondary'>1st Floor, Sector 125, Noida 201303, Uttar Pradesh</p>
                      </div>
                  </div>
                  <h4 className='mt-3 text-base2 font-medium'>Singapore</h4>
                  <div className='flex items-start mt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className='mt-[5px]'><path fill="none" d="M0 0h24v24H0z"/><path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488v-2.074zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                      <div className='ml-1'>
                        <span className='text-base text-secondary'>7 Temasek Boulevard #12-02C,</span>
                        <p className='text-base text-secondary'>Suntec Tower One, Singapore 038987</p>
                      </div>
                  </div>
              </div>
              <div className='w-3/5 sm:w-full'>
                  <Contactform />
              </div>
            </div>
            <div className='w-full flex sm:flex-wrap lg:max-w-[1454px] items-center max-w-[90%] md:max-w-full sm:max-w-full mx-auto py-6'>
                <div className='w-1/2 sm:w-full'>
                    <Subscribe />
                </div>
                <div className='w-1/2 sm:w-full mt-4'>
                    <Socialicons />
                </div>
            </div>
        </div>
        <div className='border-t border-[#E1E1E8]'>
          <div className="container-none md:container lg:container mx-auto px-3 md:px-0 sm:px-0">
              <div className='flex lg:max-w-[1454px] max-w-[90%] md:max-w-full mx-auto'>
                <ul className='items-start flex w-full justify-between mt-2 md:hidden sm:hidden'>
                  <li className='text-sm font-bold w-[20%]'>
                    <Link href="/about">About</Link>
                  </li>
                  <li className='text-sm font-bold w-[20%]'>
                    <Link href="/about">Our Story</Link>
                  </li>
                  <li className='text-sm font-bold w-[20%]'>
                    <Link href="/about">Leadership</Link>
                  </li>
                  <li className='text-sm font-bold w-[20%]'>
                    <Link href="/about">News</Link>
                  </li>
                  <li className='text-sm font-bold w-[20%]'>
                    <Link href="/about">Career</Link>
                  </li>
                </ul>
                <ul className='lg:hidden flex w-full my-2 xl:hidden items-center'>
                  <li className='text-sm font-bold pr-2 sm:text-xs sm:pr-1'>
                    <Link href="/about">About</Link>
                  </li>|
                  <li className='text-sm font-bold pl-2 mr-2  sm:text-xxs sm:pr-1 sm:pl-1 sm:mr-0'>
                    <Link href="/about">Our Story</Link>
                  </li>|
                  <li className='text-sm font-bold pl-2 mr-2  sm:text-xxs sm:pr-1 sm:pl-1 sm:mr-0'>
                    <Link href="/about">Leadership</Link>
                  </li>|
                  <li className='text-sm font-bold pl-2 mr-2  sm:text-xxs sm:pr-1 sm:pl-1 sm:mr-0'>
                    <Link href="/about">News</Link>
                  </li>|
                  <li className='text-sm font-bold  pl-2 mr-2  sm:text-xxs sm:pr-1 sm:pl-1 sm:mr-0'>
                    <Link href="/about">Career</Link>
                  </li>
                </ul>
              </div>
              <div className='flex md:flex-wrap sm:flex-wrap justify-between md:justify-start  lg:max-w-[1454px] max-w-[90%] md:max-w-full mx-auto'>
                {/* industries list */}
              <div className='w-[20%] md:w-1/3 sm:w-1/2 md:mb-4  sm:mb-4'>
                <h3 className="text-sm font-bold mt-2 sm:text-xs">Your Industries</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.industries.map((item) => (
                    <li key={item.name} className="text-sm ">
                      <a href={item.href} className="text-sm sm:text-xs text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Solutions list */}
              <div className='w-[20%] md:w-1/3 sm:w-1/2 md:mb-4 sm:mb-4'>
                <h3 className="text-sm font-bold mt-2 sm:text-xs">Our Solutions</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="text-sm ">
                      <a href={item.href} className="text-sm sm:text-xs text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Optimise Procurement list */}
              <div className='w-[20%] md:w-1/3 sm:w-1/2 md:mb-4 sm:mb-4'>
                <h3 className="text-sm font-bold mt-2 sm:text-xs">Optimise Procurement</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.optimize.map((item) => (
                    <li key={item.name} className="text-sm ">
                      <a href={item.href} className="text-sm sm:text-xs text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Digital Transformation list */}
              <div className='w-[20%] md:w-1/3 sm:w-1/2 sm:mb-4'>
                <h3 className="text-sm font-bold mt-2 sm:text-xs">Digital Transformation</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.digital.map((item) => (
                    <li key={item.name} className="text-sm ">
                      <a href={item.href} className="text-sm sm:text-xs text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources list */}
              <div className='w-[20%] md:w-1/3 sm:w-1/2 sm:mb-4'>
                <h3 className="text-sm font-bold mt-2 sm:text-xs">Resources</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.digital.map((item) => (
                    <li key={item.name} className="text-sm ">
                      <a href={item.href} className="text-sm sm:text-xs text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
          </div>
        </div>
        <div className='bg-[#E1E1E8] py-4 mt-6'>
              <div className='container-none md:container lg:container mx-auto px-3 md:px-0 sm:px-2'>
                <div className='w-full justify-between flex sm:flex-wrap sm:justify-center lg:max-w-[1454px] max-w-[90%] md:max-w-full sm:max-w-full mx-auto'>
                  <ul className='flex sm:w-full sm:mb-3 sm:justify-center'>
                    <li className='mr-3'>
                      <Link className='text-sm text-secondary' href='/terms'>Terms of Use</Link>
                    </li>
                    <li>
                      <Link className='text-sm text-secondary' href='/privacypolicy'>Privacy Policy</Link>
                    </li>
                  </ul>
                  <div className='text-right text-sm text-secondary sm:w-full sm:text-center'>
                      ??2022 Moglix. All Rights Reserved
                  </div>
                </div>
                
              </div>
        </div>
      </footer>
    )
  
}

export default Footer;