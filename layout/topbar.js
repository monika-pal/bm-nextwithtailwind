import  Link  from "next/link";
import { Disclosure } from '@headlessui/react';


const Topbar = ()=> {
    
    return (
        <Disclosure as="topbar" className="bg-white z-[9] relative">
    {({ open }) => (
        <>
        <div className="bg-graybg">
            <div className="container md:container lg:container mx-auto px-3 md:px-0">
                <div className="flex justify-between items-center">
                    <ul>
                        <li className="font-regular text-sm sm:text-xs">
                            <a className="text-secondary block" href= "https://india.paperex-expo.com/Home" target="_blank" rel="noreferrer">Meet us at <span className="font-bold">Paperex</span> 2022. &#8594;</a> 
                        </li>
                    </ul>
                    <ul className="flex items-center md:hidden sm:hidden lg:hidden">
                        <li className="sm:px-1 px-4 text-xs font-medium text-gray">
                        <Link href='/career'>Careers</Link> 
                        </li>
                        <li className="sm:px-1 px-4 text-xs font-medium text-gray">
                        <Link href='/about'>Events</Link>
                        </li>
                        <li className="sm:px-1 px-3 text-xs font-medium py-1 lg:py-1 mx-1 bg-brand">
                        <Link href='/contact' className="block text-xs text-white">Contact Us</Link>
                        </li>
                        <li className="sm:px-1 px-4 text-xs font-medium text-gray pr-0">
                        <Link href='/resources'>Resources</Link>
                        </li>
                    </ul>
                    <ul className="flex items-center md:hidden sm:hidden lg:hidden">
                        <li className="sm:px-1 px-3 text-xs font-medium py-1 lg:py-1 mx-1 bg-brand">
                        <Link href='/contact' className="block text-xs text-white">Contact Us</Link>
                        </li>
                    </ul>
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                    
                        )}
                    </Disclosure.Button>
                </div>
                
            </div> 
        </div>
        
        <Disclosure.Panel className="sm:visible lg:hidden">
            <div className="sm:container md:container mx-auto px-3 relative">
            <ul className="flex flex-wrap absolute items-center w-[150px] bg-white shadow right-0 z-99">
                <li className="w-full h-[30px] leading-[30px] px-4 text-xs font-medium text-gray">
                    <Link href='/career'>Careers</Link> 
                </li>
                <li className="w-full h-[30px] leading-[30px] px-4 text-xs font-medium text-gray">
                    <Link href='/about'>Events</Link>
                </li>
                <li className="w-full h-[30px] leading-[30px] px-4 text-xs font-medium text-gray">
                    <Link href='/contact'>Contact Us</Link>
                </li>
                <li className="w-full h-[30px] leading-[30px] px-4 text-xs font-medium text-gray pr-0">
                    <Link href='/resources'>Resources</Link>
                </li>
            </ul>
            </div>
            
        </Disclosure.Panel>
        </>
         )}
         </Disclosure>
    )
   

}
export default Topbar;
