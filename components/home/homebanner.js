import React, { Component, useEffect, } from 'react';
import { useState } from 'react';
import $ from 'jquery';
var document = require("global/document")
var window = require("global/window")


const Homebanner = () => {
  useEffect(() => {
    $(document).ready(function() {
      var $item = 0,
        $itemNo = $(".hero figure").length;
      function transitionSlide() {
        $item++;
        if ($item > $itemNo - 1) {
          $item = 0;
        }
        $(".hero figure").removeClass("on");
        $(".hero figure")
          .eq($item)
          .addClass("on");
      }
       var $autoTransition = setInterval(transitionSlide, 3500);
    
      $(".hero figure").hover(function() {
         clearInterval($autoTransition);
        $item = $(this).index();
        $(".hero figure").removeClass("on");
        $(".hero figure")
          .eq($item)
          .addClass("on");
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
      <nav className="container-none md:container lg:container mx-auto px-3">
        <div className="flex">
          <div className="w-1/4 flex items-center ">
            <div className='flex justify-center flex-col'>
              <h1 className='text-heading1 font-medium mb-[30px]'>
                <span className='text-brand'>Grow </span>with <br /> Moglix
              </h1>
              <p className='mb-[15px]'>Learn how we are driving change for <br /> businesses across the spectrum</p>
              <div className="mt-1 flex rounded-md shadow-sm w-[380px] z-[10]" >
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-3 w-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value=''
                    className="block w-full rounded-none border border-grey-border pl-10 focus:outline-none focus:none sm:text-sm"
                    placeholder="procure to pay solutions"
                  />
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
          <div className="w-3/4">
            <div id="hero">
              <div class="hero">
                <figure class="on">
                  <img src="/assets/img/banner1.png"/>
                  <div>
                    <h2>The road to sustainable & efficient supply chain starts here.</h2>
                    <p>From procurement to financing, your partner in solving toughest of supply chain problems.</p>
                  </div>
                  <p className="verticle-heading">Work with us</p>
                </figure>
                <figure>
                <img src="/assets/img/banner2.png"/>
                  <div>
                    <h2>Heading 2</h2>
                    <p>Hella wayfarers messenger bag normcore readymade slow-carb quinoa tumeric fixie ramps.</p>
                  </div>
                  <p className="verticle-heading">Moglix in news</p>
                </figure>
                <figure>
                <img src="/assets/img/banner3.png"/>
                  <div>
                    <h2>Heading 3</h2>
                    <p>Hella wayfarers messenger bag normcore readymade slow-carb quinoa tumeric fixie ramps.</p>
                  </div>
                  <p className="verticle-heading">Moglix in news</p>
                </figure>
              </div>
            </div>
            {/* <div className="accordion">
              <ul>
                {BannerAccordionContent.map((bannerData) =>
                  <li key={bannerData.id}>
                    <div>
                      <img src={bannerData.imgPath} alt="" />
                      <a href="#" className="sliderLink">
                        <h2>{bannerData.heading}</h2>
                        <p>{bannerData.subheading}
                        </p>
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div> */}
          </div>
        </div>

      </nav>

    </div>
  )

}

export default Homebanner 