import React, { Component, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react';
import $ from 'jquery';
import Typed from 'react-typed';
var document = require("global/document")


const Homebanner = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    $(document).ready(function () {

      var $item = 0;
      var $prevState = -1;
      var $itemNo = $(".hero figure").length;
      function transitionSlide() {
        if ($itemNo - 1 > $prevState) {
          $item++;
          $prevState += 1;
        } else {
          $item--;
          $prevState = -1;
        }
        if ($item > $itemNo - 1) {
          $item -= $itemNo - 1;
        }
        $(".hero figure").removeClass("on");
        $(".hero figure").eq($item).addClass("on");
      }
      var $autoTransition = setInterval(transitionSlide, 3500);
      $(".hero figure").hover(function () {
        clearInterval($autoTransition);
        var $item = $(this).index();
        //   $item = 0;
        // $prevState = -1;
        $(".hero figure").removeClass("on");
        $(".hero figure").eq($item).addClass("on");

      });
      $(".hero figure").mouseleave(function () {
        clearInterval($autoTransition);
        $autoTransition = setInterval(transitionSlide, 3500);
      });
    });



  }, []);


  // const BannerAccordionContent = [
  //   {
  //     id: 1,
  //     stripHeading: 'Moglix for supply chain',
  //     imgPath: '/assets/img/sampleImg1.jpg',
  //     heading: 'The road to sustainable & efficient supply chain starts here.',
  //     subheading: 'From procurement to financing, your partner in solving toughest of supply chain problems.'
  //   },
  //   {
  //     id: 2,
  //     stripHeading: 'Moglix in news',
  //     imgPath: '/assets/img/sampleImg2.jpg',
  //     heading: 'The road to sustainable & efficient supply chain starts here.',
  //     subheading: 'From procurement to financing, your partner in solving toughest of supply chain problems.'
  //   },
  //   {
  //     id: 3,
  //     stripHeading: 'Work with us',
  //     imgPath: '/assets/img/sampleImg3.jpg',
  //     heading: 'The road to sustainable & efficient supply chain starts here.',
  //     subheading: 'From procurement to financing, your partner in solving toughest of supply chain problems.'
  //   },
  // ];

  return (
    <div>
      <nav className="container md:container lg:container mx-auto px-3">
        <div className="flex flex-col lg:flex-row xl:flex-row">

          <div className="w-full lg:w-1/4 flex items-center pb-3 lg:pb-0">
            <div className='flex justify-center w-full lg:w-[auto] flex-col '>
              <h1 className='text-xxl lg:text-heading1 font-medium my-2 lg:my-0 lg:mb-5'>
                <span className='text-brand'>Grow </span>with <br /> Moglix
              </h1>
              <p className='mb-[15px]'>Learn how we are driving change for <br /> businesses across the spectrum</p>
              <div className="mt-1 flex rounded-md shadow-sm w-full lg:w-[380px] z-[10] autoTypeSearch shadow-autoTypeBoxShadow">
                <div className="relative flex flex-grow items-stretch focus-within:z-10 border border-grey-border">
                  <div className="pointer-events-none w-[33px] relative inset-y-0 left-0 flex items-center pl-2 h-full ">
                    <svg className="h-3 w-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                  </div>
                  <Typed
                    loop={true}
                    loopCount={0}
                    typeSpeed={75}
                    startDelay={0}
                    backSpeed={20}
                    backDelay={1}
                    strings={["Value 1 ", "Value 2", "Value 3"]}
                    stopped={null}
                    smartBackspace
                    shuffle={false}
                    fadeOut={false}
                    fadeOutDelay={1000}
                    attr="value"
                    bindInputFocusEvents={false}
                  >
                    <input
                      type="email"
                      name="email"
                      id="email" 
                      // onClick={() => setOpen(true)}
                      className="block w-full rounded-none rounded-l-md border-gray-300 pl-2 focus-visible:outline-none  sm:text-sm"

                    />
                  </Typed>

                </div>
                <button
                  type="button"
                  className="relative -ml-px bg-brand inline-flex items-center space-x-2  bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)" /></svg>

                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <div id="hero">
              <div class="hero">
                <figure class="on">
                  <img src="/assets/img/banner1.png" />
                  <div>
                    <h2>The road to sustainable & efficient supply chain starts here.</h2>
                    <p>From procurement to financing, your partner in solving toughest of supply chain problems.</p>
                  </div>
                  <p className="verticle-heading">Work with us</p>
                </figure>
                <figure>
                  <img src="/assets/img/banner2.png" />
                  <div>
                    <h2>Heading 2</h2>
                    <p>Hella wayfarers messenger bag normcore readymade slow-carb quinoa tumeric fixie ramps.</p>
                  </div>
                  <p className="verticle-heading">Moglix in news</p>
                </figure>
                <figure>
                  <img src="/assets/img/banner3.png" />
                  <div>
                    <h2>Heading 3</h2>
                    <p>Hella wayfarers messenger bag normcore readymade slow-carb quinoa tumeric fixie ramps.</p>
                  </div>
                  <p className="verticle-heading">Moglix in news</p>
                </figure>
              </div>
            </div>
    
          </div>
        </div>

      </nav>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto bg-overlay-color">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg  text-left shadow-xl transition-all sm:my-8  ">
                  <div>

                    <div className="text-center">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white flex justify-center">
                        <div className="mt-1 flex rounded-md w-full lg:w-[380px] z-[10] autoTypeSearch shadow-autoTypeBoxShadow" >
                          <div className="relative flex flex-grow items-stretch focus-within:z-10 justify-center">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 h-full w-full border border-grey-border bg-white">
                              <svg className="h-3 w-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>

                              <input
                                type="text"
                                name="email"
                                id="email" placeholder='Search'
                                className="block w-full rounded-none border border-grey-border pl-2 focus:outline-none focus:none sm:text-lg"
                              />
                            </div>
                          </div>
                          <button
                            type="button" onClick={() => setOpen(true)}
                            className="relative -ml-px bg-brand inline-flex items-center space-x-2  bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)" /></svg>

                          </button>
                        </div>
                      </Dialog.Title>

                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )

}

export default Homebanner 