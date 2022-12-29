import React, { Component } from 'react'

const Contactform =()=> {
  
    return (
      
        <form action="#" method="POST">
            <div className='flex items-start sm:flex-wrap justify-between w-full mt-5'>
                    <div className='w-[48%] sm:w-full'>
                        <div className='pb-5'>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block text-base w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor h-[50px] focus:outline-none sm:text-sm"
                            placeholder="Enter Name*"
                            />
                        </div>
                        <div className='pb-5'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block text-base w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor h-[50px] focus:outline-none sm:text-sm"
                            placeholder="Enter Official Email ID*"
                            />
                        </div>
                        <div className='pb-5'>
                        <input
                            type="number"
                            name="phoneno"
                            id="phoneno"
                            className="block text-base w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor h-[50px] focus:outline-none sm:text-sm"
                            placeholder="Enter Phone No*"
                            />
                        </div>
                        <div className='pb-5'>
                        <input
                            type="text"
                            name="companyname"
                            id="companyname"
                            className="block text-base w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor h-[50px] focus:outline-none sm:text-sm"
                            placeholder="Company Name*"
                            />
                        </div>
                    </div>
                    <div className='w-[48%] sm:w-full'>
                        <div className='pb-5'>
                        <select
                            id="enterprise"
                            name="enterprise"
                            className="block text-base text-[#979797] w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor h-[50px] focus:outline-none sm:text-sm"
                            defaultValue="Select Enterprise Solution">
                            <option>Select Enterprise Solution</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        </div>
                        <div className='pb-5'>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="block text-base text-[#979797] h-[130px] w-full bg-[#F9F9FB] px-[10px] rounded-md border border-bordercolor focus:outline-none sm:text-sm"
                            defaultValue={''}
                            />
                        </div>
                       
                        <div className='pb-5'>
                        <button
                            type="submit"
                            id="companyname"
                            className="block text-base text-white w-full bg-brand px-[10px] rounded-md border border-brand h-[50px] hover:bg-brandhover focus:outline-none sm:text-sm"
                            >SUBMIT</button>
                        </div>
                    </div>
            </div>
        </form>
        
    )
  
}

export default Contactform;