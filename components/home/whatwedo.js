import React, { Component, useEffect } from 'react'
import { ParallaxProvider} from 'react-scroll-parallax';
// import { Parallax } from 'react-parallax';
import styles from  '../../styles/solutions.module.scss';
import 'animate.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';




 const WhatWeDo=()=> {
  
 
  
  
  const {ref, inView} = useInView();
  const animateKiteTop = useAnimation();
  const animateKiteMiddle = useAnimation();
  const animateKiteBottom = useAnimation();
  const animateLeftMImage = useAnimation();

  useEffect(() => {
    if(inView){
      animateKiteTop.start({
        opacity: 0.75,
        y:-69,
        transition:{
          duration:0.5,
        }
        
      })
      animateKiteMiddle.start({
        opacity: 0.75,
        y:0,
        transition:{
          duration:0.5,
        }
      })
      animateKiteBottom.start({
        opacity: 0.75,
        y:67,
        transition:{
          duration:0.5,
        }
      })
      animateLeftMImage.start({
        opacity: 1,
          transition:{
            ease:'easeIn',
            duration:0.4
          }
      })
     
    }
    if(!inView){
      animateKiteTop.start({
        opacity: 0,
        y:1,
        transition:{
          duration:0.5,
        }
      })
      animateKiteMiddle.start({
        opacity: 0,
        y:0,
        transition:{
          duration:0.5,
        }
      })
      animateKiteBottom.start({
        opacity: 0,
        y:2,
        transition:{
          duration:0.5,
        }
      })
      animateLeftMImage.start({
        opacity: 0,
          delay:5000,
          transition:{
            ease:'easeOut',
            duration:0.4
          }
      })
     
    }
   
   
    
  }, [inView]);
  
 
    return (
      
           
          <section className="w-[100%] relative">
            <div className="py-sp-big">
                <div className='container-none md:container lg:container mx-auto py-5 px-3'>
                    <div className='flex items-center'>
                        <div className='w-[25%]' >
                            <h3 className='lg:text-xl text-lg text-brand font-medium mb-2'>What we do</h3>
                            <p className='lg:text-textxl text-lg text-secondary mb-5 lg:leading-[45px] leading-[40px]'>Transforming businesses with tech-enabled procurement & improving supply chain with customized manufacturing supplies, Moglix drives efficiency all around you.</p>
                            <button className='w-[230px] text-center justify-center items-center font-bold lg:text-base2 text-base text-white bg-brand h-[50px] flex shadow-[0 5px 10px rgba(217, 35, 45, 0.24)] hover:bg-brandhover'><span className='mr-1'>Know More</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg></button>
                        </div>
                        <div className='w-[50%] min-h-[400px] relative' >
                            <motion.div className={styles.larea} animate={animateLeftMImage}>
                                <img src='/assets/img/M-leftimage.svg' />
                            </motion.div>
                            <div className='flex flex-wrap absolute left-[15%] w-[200px] top-[50%] mx-auto justify-center'>
                                <motion.div animate={animateKiteTop} className="z-[3] relative">
                                    <span className={[styles.wwd_boxlabel, styles.wwd_boxlabel1].join(" ")}>01.</span>
                                    <div className={[styles.solutionDiv, styles.orange].join(" ")}></div>
                                </motion.div>
                                <motion.div animate={animateKiteMiddle} className="z-[2] relative">
                                    <span className={[styles.wwd_boxlabel, styles.wwd_boxlabel2].join(" ")}>02.</span>
                                    <div className={[styles.solutionDiv, styles.yellow].join(" ")} ></div>
                                </motion.div>
                                <motion.div animate={animateKiteBottom}  className="z-[1] relative">
                                    <span className={[styles.wwd_boxlabel, styles.wwd_boxlabel3].join(" ")}>03.</span>
                                    <div className={[styles.solutionDiv, styles.green].join(" ")} ></div>
                                </motion.div>
                                
                            </div>
                            <div className={[styles.rarea]} animate={animateLeftMImage}>
                                <div className={styles.topborder}>
                                  <span><img width="15" src='/assets/img/Polygon1.svg' /></span>
                                </div>
                                <div className={styles.midborder}>
                                  <span><img width="15" src='/assets/img/Polygon2.svg' /></span>
                                </div>
                                <div className={styles.botborder}>
                                  <span><img width="15" src='/assets/img/Polygon3.svg' /></span>
                                </div>
                            </div> 
                            
                        </div>
                        <div className='w-[25%]'>
                            <div className='border border-[#F3722C] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Procurement Optimisation</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='text-base font-regular'>MRO Optimisation</li>
                                            <li className=' text-base font-regular'>Packaging Solutions</li>
                                            <li className=' text-base font-regular'>Custom Fabrication</li>
                                         </ul>
                            </div>
                            <div  className='border border-[#F8BD1E] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Brand Solutions</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='text-base font-regular'>Moglix.com store</li>
                                            <li className='text-base font-regular'>Custom Digital Platform</li>
                                            <li className=' text-base font-regular'>Distribution as a Service </li>
                                         </ul>
                            </div>
                            <div ref={ref} className='border border-[#43AA8B] p-3 rounded-[12px] shadow-[0 30px rgba(209, 227, 255, 0.6)] mb-2'>
                                    <h4 className='text-secondary text-lg font-semibold flex justify-between flex-wrap mb-0'>
                                         <span>Procurement Optimisation</span>
                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="#D9232D" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                         
                                    </h4>
                                    <ul className='pl-1'>
                                            <li className='text-base font-regular'>Financing Solutions</li>
                                            <li className=' text-base font-regular'>Supply chain Financing</li>
                                            <li className=' text-base font-regular'>Channel Financing</li>
                                         </ul>
                            </div>
                        </div>
                        <motion.img className={styles.bottombgwwd} animate={animateLeftMImage}  src='/assets/img/wwdbottom.svg' />
                    </div>
                </div>
            </div>
          </section>
      
        
        
   
     
    )
  
}

export default WhatWeDo;