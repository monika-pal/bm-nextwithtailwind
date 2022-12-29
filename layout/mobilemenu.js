import React, { Component } from 'react';
import { Disclosure } from '@headlessui/react';
import  Link  from "next/link";


const Mobilemenu=()=> {
  
    return (
        <div className="max-h-[300px] overflow-y-auto border-l border-b border-r border-[#ccc] bg-white">
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/about' className='flex justify-between'>About Us <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></Link>
        </Disclosure.Button>
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/industries' className='flex justify-between'>Industries <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></Link>
        </Disclosure.Button>
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/about' className='flex justify-between'>Solutions <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></Link>
        </Disclosure.Button>
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/about' className='flex'>Sustainability </Link>
        </Disclosure.Button>
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/about' className='flex'>Blog </Link>
        </Disclosure.Button>
        <Disclosure.Button className="px-4 text-sm font-semibold text-secondary h-[60px] w-full border-b border-[#ccc]">
        <Link href='/about' className='flex'>Newsroom </Link>
        </Disclosure.Button>
        {/* <Disclosure.Button className="pr-4 pl-4 lg:text-base text-sm font-semibold text-secondary">
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></button>
        </Disclosure.Button> */}
    
    </div>
    )
        
    
    

}

export default Mobilemenu;