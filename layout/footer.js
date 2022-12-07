import React, { Component } from 'react';
import Socialicons from '../components/shared/socialicons';
import Subscribe from '../components/shared/subscribe';
import Link from 'next/link';

export default class Footer extends Component {
  
   
    industries = [
      { name: 'Auto & Ancillary ', href: '#' },
      { name: 'Cement Chemicals ', href: '#' },
      { name: 'FMCG', href: '#' },
      { name: 'Metal & Mining', href: '#' },
      { name: 'Oil & Gas', href: '#' },
      { name: 'Pharmaceuticals', href: '#' },
      { name: 'Fashion ', href: '#' },
      { name: 'Renewables', href: '#' },
    ]
   solutions= [
      { name: 'Optimise Procurement', href: '#' },
      { name: 'Supplychain financing', href: '#' },
      { name: 'Distribution Optimisation', href: '#' },
      { name: 'Digital Transformation', href: '#' },
      { name: 'Custom Manufacturing', href: '#' },
      { name: 'Loyalty', href: '#' },
    ]
   
    

  render(props) {
    return (
      <footer className="bg-graybg py-sp-big">
        <div className="container-none md:container lg:container mx-auto px-3">
            <div className='w-full bg-white shadow-xl lg:max-w-[1454px] max-w-[90%] mx-auto'>
                <h3>Contact</h3>
            </div>
            <div className='w-full flex lg:max-w-[1454px] max-w-[90%] mx-auto py-5'>
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
                <ul className='items-start flex w-full justify-between'>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/about">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/about">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/about">News</Link>
                  </li>
                  <li>
                    <Link href="/about">Career</Link>
                  </li>
                </ul>
              </div>
              <div className='flex justify-between'>
              <div>
                <h3 className="text-base font-medium text-gray-900">Your Industries</h3>
                
                <ul role="list" className="mt-4 space-y-4">
                 
                  {industries.map((item) => (
                    <li key={item.name}>
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
      </footer>
    )
  }
}
