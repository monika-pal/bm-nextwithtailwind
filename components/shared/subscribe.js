import React, { Component } from 'react'

export default class Subscribe extends Component {
  render() {
    return (
        <div>
        <div className="mt-1 relative w-[80%] md:w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full pr-[150px] pl-[10px] rounded-md border-bordercolor h-[50px] shadow-sm focus:outline-none sm:text-sm"
          placeholder="Please enter your email"
        />
        <button className='h-[38px] w-[141px] absolute right-[6px] top-[6px] bg-secondary rounded-md font-rubik lg:text-base text-sm text-white' type='submit'>SUBSCRIBE</button>
      </div>
      <span className='font-rubik text-xs text-secondary'>Get the latest updates and early access</span>
      </div>
    )
  }
}
