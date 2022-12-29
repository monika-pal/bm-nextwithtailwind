import React, { useEffect, useRef,useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import styles from  '../../styles/findmore.module.scss';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Findmore =()=> {
    const {ref, inView} = useInView();
    const animateVideobg = useAnimation();
    const animateText = useAnimation();
    const [scrollPos, getscrollPos] = useState(0);
    const inputRef = useRef(null);
  
    useEffect(() => {
      let scalePos = document.getElementById('scale-section');
      // console.log(scalePos.offsetTop)
      getscrollPos(scalePos.offsetTop)
      if(inView){
        animateVideobg.start({
          opacity: 1,
          delay:2,
          scaleX:1,
          x:'0%',
          transformOrigin:'left left',
          transition:{
            ease:'easeInOut',
            // duration:0.5,
            // delayChildren: 0.5,
            // staggerChildren: 0.5,
            style:{
              width:'100%',
            },
            // type:'spring'
          }
         
        })
        animateText.start({
          opacity: 1,
          transition:{
            delay:0.5,
            ease:'easeIn',
            type:'spring'
          }
        })
       
      }
      if(!inView){
        animateVideobg.start({
          opacity: 0,
          delay:0,
          scaleX:0.05,
          transformOrigin:'left',
          x:'0%',
          transition:{
            ease:'easeOut',
            duration:0.5,
            // type:'spring',
            style:{
              width:'10%'
            },
            
          }
         
        })
        animateText.start({
          opacity: 0,
          transition:{
            // delay:0.5,
            ease:'easeOut'
          }
        })
      
      }
     
      
    }, [inView]);

  
    return (
      <section className=" bg-no-repeat bg-bottom bg-contain">
      <ParallaxProvider>
  
            <Parallax scale={[0.9, 1]} startScroll={scrollPos - 552} endScroll={scrollPos - 113}
             className="moon bg-no-repeat bg-cover mx-auto px-0 relative xl:h-[100vh] lg:h-[100vh] md:h-[100vh] md:min-h-[600px] sm:h-[70vh] sm:min-h-[600px]" id="scale-section">
                     
              <video autoPlay loop muted className={styles.videobg}>
                  <source src='/assets/video/pexels-bmvideo.mp4' type="video/mp4"/>  
              </video>
                
                <motion.div animate={animateVideobg}  className="border border-white sm:py-[50px] md:py-[50px] py-[120px] md:top-[32%]  top-[20%] absolute z-1 left-sp-small right-sp-small mx-auto">
                     <div>
                      <div className='absolute left-0 right-0 top-0 bottom-0 blur-[3px] bg-[rgba(0,0,0,0.5)]'></div>  
                      <motion.h3 animate={animateText} className='text-heading2 sm:text-textxl sm:px-2 sm:font-medium sm:leading-[38px] text-center text-white font-bold z-2 mx-auto relative w-[100%] max-w-[700px]'>
                          Whether you are a small or mid-sized business or a large corporation, Moglix has a solution for you.​
                      </motion.h3>
                      
                      <motion.button animate={animateText} className='border border-white h-[50px] w-[220px] rounded-[5px] bg-brand mx-auto text-white relative mt-6 block'>Find More</motion.button>
                    </div>
                </motion.div>
                
                
               
            </Parallax>
            <div className='ds' ref={ref}></div>
      
      </ParallaxProvider>
      </section>
    )
  
}

export default Findmore;