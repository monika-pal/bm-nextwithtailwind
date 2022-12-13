import React, { Component } from 'react'
import { useParallax, Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from 'react-scroll-parallax';
// import { Parallax } from 'react-parallax';
import styles from  '../../styles/solutions.module.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import 'animate.css';



 const Scrollparallex=()=> {


 
    return (
    
    <div className="relative">
      

   
        <ParallaxProvider>
        {/* <section className='h-[100vh] bg-[green] w-[100vw]'>

</section> */}
        <div className='relative w-full '>
          <Parallax scale={[0.95, 1,'easeInQuad']} speed={50} >
            <div 
             className="moon bg-[url('/assets/img/sampleImg1.jpg')] bg-no-repeat bg-cover mx-auto  py-sp-big px-6 relative h-[600px]">
                <div className="border border-white py-sp-big relative z-0">
                     <div className='absolute left-0 right-0 top-0 bottom-0 blur-[3px] bg-[rgba(0,0,0,0.5)]'>
                    </div>  
                    <h3 className='text-heading2 text-center text-white font-bold z-1 mx-auto relative w-[100%] max-w-[700px]'>
                        Whether you are a small or mid-sized business or a large corporation, Moglix has a solution for you.​
                    </h3>
                    <button className='border border-white h-[50px] w-[220px] rounded-[5px] bg-brand mx-auto text-white relative mt-6 block'>Find More</button>
                </div>
               
            </div>
            </Parallax>
            </div>
           
          
            
            <section  className="w-[100%] h-[100vh] relative">
          <div className=" h-[100vh] py-sp-big">
                <div className='container-none md:container lg:container mx-auto py-5 px-3'>
                    <div className='flex items-center'>
                        <div className='w-[25%]'>
                            <h3 className='lg:text-xl text-lg text-brand font-medium mb-2'>What we do</h3>
                            <p className='lg:text-textxl text-lg text-secondary mb-5 lg:leading-[50px] leading-[40px]'>Transforming businesses with tech-enabled procurement & improving supply chain with customized manufacturing supplies, Moglix drives efficiency all around you.</p>
                            <button className='w-[230px] text-center justify-center items-center font-bold lg:text-base2 text-base text-white bg-brand h-[50px] flex shadow-[0 5px 10px rgba(217, 35, 45, 0.24)] hover:bg-brandhover'><span className='mr-1'>Know More</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg></button>
                        </div>
                        <div className='w-[50%] min-h-[600px] relative'>
                            <div className='flex flex-wrap absolute top-[50%] mx-auto justify-center'>
                            
                                <Parallax speed={20}  translateY={['0px', '-100px']} className="z-[3] relative">
                                    <ParallaxBannerLayer opacity={[1, 0.75]} className={[styles.solutionDiv, styles.orange].join(" ")}></ParallaxBannerLayer>
                                </Parallax>
                                <Parallax speed={20}  translateY={['0px', '1px']} className="z-[2] relative">
                                    <ParallaxBannerLayer opacity={[1, 0.75]} className={[styles.solutionDiv, styles.yellow].join(" ")} ></ParallaxBannerLayer>
                                </Parallax>
                                <Parallax speed={20}  translateY={['0px', '100px']} className="z-[1] relative">
                                    <ParallaxBannerLayer opacity={[1, 0.75]} className={[styles.solutionDiv, styles.green].join(" ")} ></ParallaxBannerLayer>
                                </Parallax>
                                
                                
                            </div>
                            
                        </div>
                        <div className='w-[25%]'>
                            <div className='border border-[#F3722C] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary lg:text-xl text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Procurement Optimisation</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='lg:text-base2 text-base font-regular'>MRO Optimisation</li>
                                            <li className='lg:text-base2 text-base font-regular'>Packaging Solutions</li>
                                            <li className='lg:text-base2 text-base font-regular'>Custom Fabrication</li>
                                         </ul>
                            </div>
                            <div className='border border-[#F8BD1E] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary lg:text-xl text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Brand Solutions</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='lg:text-base2 text-base font-regular'>Moglix.com store</li>
                                            <li className='lg:text-base2 text-base font-regular'>Custom Digital Platform</li>
                                            <li className='lg:text-base2 text-base font-regular'>Distribution as a Service </li>
                                         </ul>
                            </div>
                            <div className='border border-[#43AA8B] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary lg:text-xl text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Procurement Optimisation</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='lg:text-base2 text-base font-regular'>Financing Solutions</li>
                                            <li className='lg:text-base2 text-base font-regular'>Supply chain Financing</li>
                                            <li className='lg:text-base2 text-base font-regular'>Channel Financing</li>
                                         </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </ParallaxProvider>
        <div className="section" />
    
         
        
  </div>
     
    )
  
}

export default Scrollparallex;