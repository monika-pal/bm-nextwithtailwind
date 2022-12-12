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
      <footer className="bg-graybg pt-sp-big">
        <div className="container-none md:container lg:container mx-auto px-3">
            <div className='w-full flex bg-white shadow-xl lg:max-w-[1454px] max-w-[90%] mx-auto px-6 py-6'>
              <div className='w-2/5'>
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
              <div className='w-3/5'>
                  <Contactform />
              </div>
            </div>
            <div className='w-full flex lg:max-w-[1454px] items-center max-w-[90%] mx-auto py-6'>
                <div className='w-1/2'>
                    <Subscribe />
                </div>
                <div className='w-1/2'>
                    <Socialicons />
                </div>
            </div>
        </div>
        <div className='border-t border-[#E1E1E8]'>
          <div className="container-none md:container lg:container mx-auto px-3">
              <div className='flex lg:max-w-[1454px] max-w-[90%] mx-auto'>
                <ul className='items-start flex w-full justify-between mt-2'>
                  <li className='text-sm font-bold lg:text-base w-[20%]'>
                    <Link href="/about">About</Link>
                  </li>
                  <li className='text-sm font-bold lg:text-base w-[20%]'>
                    <Link href="/about">Our Story</Link>
                  </li>
                  <li className='text-sm font-bold lg:text-base w-[20%]'>
                    <Link href="/about">Leadership</Link>
                  </li>
                  <li className='text-sm font-bold lg:text-base w-[20%]'>
                    <Link href="/about">News</Link>
                  </li>
                  <li className='text-sm font-bold lg:text-base w-[20%]'>
                    <Link href="/about">Career</Link>
                  </li>
                </ul>
              </div>
              <div className='flex justify-between  lg:max-w-[1454px] max-w-[90%] mx-auto'>
                {/* industries list */}
              <div className='w-[20%]'>
                <h3 className="text-sm font-bold lg:text-base mt-2">Your Industries</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.industries.map((item) => (
                    <li key={item.name} className="lg:text-base text-sm ">
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Solutions list */}
              <div className='w-[20%]'>
                <h3 className="text-sm font-bold lg:text-base mt-2">Our Solutions</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="lg:text-base text-sm ">
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Optimise Procurement list */}
              <div className='w-[20%]'>
                <h3 className="text-sm font-bold lg:text-base mt-2">Optimise Procurement</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.optimize.map((item) => (
                    <li key={item.name} className="lg:text-base text-sm ">
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Digital Transformation list */}
              <div className='w-[20%]'>
                <h3 className="text-sm font-bold lg:text-base mt-2">Digital Transformation</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.digital.map((item) => (
                    <li key={item.name} className="lg:text-base text-sm ">
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources list */}
              <div className='w-[20%]'>
                <h3 className="text-sm font-bold lg:text-base mt-2">Resources</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.digital.map((item) => (
                    <li key={item.name} className="lg:text-base text-sm ">
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
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
              <div className='container-none md:container lg:container mx-auto px-3'>
                <div className='w-full justify-between flex lg:max-w-[1454px] max-w-[90%] mx-auto'>
                  <ul className='flex '>
                    <li className='mr-3'>
                      <Link className='text-sm text-secondary' href='/terms'>Terms of Use</Link>
                    </li>
                    <li>
                      <Link className='text-sm text-secondary' href='/privacypolicy'>Privacy Policy</Link>
                    </li>
                  </ul>
                  <div className='text-right text-sm text-secondary'>
                      ©2022 Moglix. All Rights Reserved
                  </div>
                </div>
                
              </div>
        </div>
      </footer>
    )
  
}

export default Footer;