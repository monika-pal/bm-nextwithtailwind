import React, { Component, useEffect } from 'react';
import styles from '../../styles/counter.module.scss';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Counters =()=> {

    const {ref, inView} = useInView();
    // const animationdot1 = useAnimation();
    // const animationdot2 = useAnimation();
    // const animationdot3 = useAnimation();
    // const animationdot4 = useAnimation();

  
    // useEffect(() => {
     
    //   if(inView){
    //     animationdot1.start({
    //         x:10,
    //       transition:{
    //         type: "spring",
    //         duration: 1,
    //       }
        
         
    //     })
       
    //   }
    //   if(!inView){
    //     animationdot.start({
    //         x:500,
    //         transition: {
    //             type: "spring",
    //             // bounce: 0.4,
    //             duration: 1,
    //             // ease:'easeInOut'
    //             // delay:100
    //           }
            
         
    //     })
      
    //   }
     
      
    // }, [inView]);
  
    return (
      <section className='py-sp-big overflow-x-hidden'>
            <div className='container-none md:container lg:container mx-auto py-5 px-3 text-center'>
                <h2 className='text-heading1 font-bold text-secondary text-center'>The numbers behind the <br/>strength of Moglix’s solutions</h2>
                <div className='h-[430px] flex w-full relative pt-[80px]'>
                    <div className='w-[25%] relative'>
                        <div className='mt-[110px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>45+</h3>
                            <span className='text-secondary text-textxl'>Categories</span>
                        </div>
                        <div className={[styles.counterdotline,styles.counterdotline1].join(' ')}>
                            <span className={[styles.counterdot,styles.counterdot1].join(' ')}></span>

                        </div>
                    </div>
                    <div className='w-[25%] relative'>
                        <div className='mt-[80px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>500+</h3>
                            <span className='text-secondary text-textxl'>Enterprises trusts us</span>
                        </div>
                        <div className={[styles.counterdotline,styles.counterdotline2].join(' ')}>
                            <span className={[styles.counterdot,styles.counterdot2].join(' ')}></span>

                        </div>
                    </div>
                    <div className='w-[25%] relative'>
                        <div className='mt-[50px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>16,000+</h3>
                            <span className='text-secondary text-textxl'>Suppliers</span>
                        </div>
                        <div className={[styles.counterdotline,styles.counterdotline3].join(' ')}>
                        <span className={[styles.counterdot,styles.counterdot3].join(' ')}></span>

                        </div>
                    </div>
                    <div className='w-[25%] relative'>
                        <div className=''>
                            <h3 className='text-secondary text-[60px] font-semibold'>500K+</h3>
                            <span className='text-secondary text-textxl'>SMEs</span>
                        </div>
                        <div className={[styles.counterdotline,styles.counterdotline4].join(' ')}>
                        <span className={[styles.counterdot,styles.counterdot4].join(' ')}></span>

                        </div>
                    </div>

                </div>
            <div className='inline-block w-auto'>
                <div className='bg-[#1F2137] px-1 py-2 '>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>5</span>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>2</span>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>5</span>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>2</span>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>6</span>
                    <span className='border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>2</span>
                    <span className='bg-brand border border-white rounded-[1px] py-1 min-w-[50px] text-white px-1 font-bold text-heading2 mx-[0.5px]'>4</span>

                </div>
                <span className='text-textxl text-secondary'>Orders delivered till now</span>
                 </div>
            </div>
            

      </section>
    )
  
}

export default Counters;