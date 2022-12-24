import React, { useRef, useState, useLayoutEffect, useCallback, } from "react"
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ScrollSliderContent = [
    {
        id: 1,
        PostImg: '/assets/img/scrollSliderImage1.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix expands its distribution footprint with 100 % acquisition of ADI India',
        PostURl: '#'
    },
    {
        id: 2,
        PostImg: '/assets/img/scrollSliderImage2.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix On A Mission to give back to the Community of Armed Forces',
        PostURl: '#'
    },
    {
        id: 3,
        PostImg: '/assets/img/scrollSliderImage3.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix Announces Executive Elevations, Strengthens Leadership As It Enters N…',
        PostURl: '#'
    },
    {
        id: 4,
        PostImg: '/assets/img/scrollSliderImage4.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Rahul Garg, CEO, Moglix: On A Mission To Impact 100 Million Lives By 2030',
        PostURl: '#'
    },
    {
        id: 5,
        PostImg: '/assets/img/scrollSliderImage2.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Rahul Garg, CEO, Moglix: On A Mission To Impact 100 Million Lives By 2030',
        PostURl: '#'
    },
];
export default function scrollSlider2() {


    return (

        <div>
            <Controller>
                <Scene triggerHook="onLeave" duration={2000} pin >
                    {(progress) => (
                        <section className='bg-graybg py-3 overflow-hidden h-[100vh] flex flex-col '>
                            <div className="container-none md:container lg:container mx-auto px-3">
                                <h2 className='text-xxl lg:text-heading1 font-bold text-secondary text-center'>Step inside the world of Moglix</h2>
                                <h3 className='text-lg font-regular text-secondary text-center'>Don’t miss out on our latest headlines and announcements.</h3>
                            </div>
                            <div>
                            </div>
                            <div className="relative pt-1 flex justify-center mx-5">
                                <div className="mt-2 w-[80%]" aria-hidden="true">
                                    <div className="overflow-hidden h-[12px] mb-2 text-xs flex rounded-[10px] bg-gray-light">
                                        <div className='flex transition-all  ease-in-out duration-1000 ' style={{ width: '100%', transformOrigin: 'left', transform: `scaleX(${progress})` }}>
                                            <div style={{ width: '40%' }} className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor1 transition-all ease-in-out duration-1000 "></div>
                                            <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor2 transition-all ease-in-out duration-1000 "></div>
                                            <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor3 transition-all ease-in-out duration-1000 "></div>
                                            <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor4 transition-all ease-in-out duration-1000 rounded-tr-[10px] rounded-br-[10px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sticky flex scrollSliderSectionHeight align-middle" >

                                <Timeline totalProgress={progress} paused>
                                    <Timeline
                                        target={
                                            <>
                                                {ScrollSliderContent.map((ScrollSliderPostData) =>

                                                    <div className="flex mr-4 scrollSliderCardHeight">
                                                        <div className=' bg-white' key={ScrollSliderPostData.id}>
                                                            <a className='block w-[340px]' href="#">
                                                                <img src={ScrollSliderPostData.PostImg} alt="" />
                                                                <div className=' p-[30px]'>
                                                                    <span className='text-date-grey text-sm mb-1'>{ScrollSliderPostData.PostDate}</span>
                                                                    <p className='text-base2 font-semibold '>{ScrollSliderPostData.PostHeading}
                                                                    </p>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center rounded border-transparent py-1.5 text-base font-medium text-anchor-blue"
                                                                    >
                                                                        Read More <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(35,105,217,1)" /></svg>
                                                                    </button>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        }
                                    >

                                        <Tween
                                            to={{ x: '-150%' }}
                                            from={{ x: '150%' }}
                                        />

                                    </Timeline>
                                </Timeline>
                            </div>
                        </section>
                    )}
                </Scene>
            </Controller>
        </div>
    )
}
