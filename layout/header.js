import  Link  from "next/link";
import Menuitem from "./menu";
import Topbar from "./topbar";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Mobilemenu from "./mobilemenu";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(){
    
    return (
    // <header className="">
    //     <Topbar />
    //     <nav className="container-none md:container lg:container mx-auto px-3">
    //         <div className="flex items-center justify-between py-3">
    //         <Link href='/'><img src='/assets/img/business_logo_dark.png' alt="logo" width="180" height="43"/></Link>
    //         <Menu />
    //         </div>
    //     </nav>
    // </header>
    <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <><Topbar />
        <header className="mx-auto bg-[#fff] shadow-normal xl:py-1">
            <div className="container md:container lg:container mx-auto px-3 md:px-0 sm:px-2">
           
            <div className="flex w-full justify-between lg:py-2 md:py-0">
              <div className="flex items-center sm:hidden">
                <Link className="block" href='/'><img src='/assets/img/business_logo_dark.png' alt="logo" width="180" height="40"/></Link>
              </div>
              <div className="flex md:hidden sm:visible lg:hidden items-center">
                <Link className="block" href='/'><img src='/assets/img/business_logo_dark.png' alt="logo" width="150"/></Link>
              </div>
              <div className="sm:hidden md:hidden flex items-center ">
              <Menuitem />
              </div>
              <div className="-mr-2 flex items-center xl:hidden lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            </div>
           
           
          </div>
          
          
        </header>

        <Disclosure.Panel className="sm:visible lg:hidden container ">
          <Mobilemenu />
          
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
    )
    
};
    