import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import styles from  '../../styles/findmore.module.scss';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Findmore =()=> {
    const {ref, inView} = useInView();
    const animateVideoCaption = useAnimation();

  
    useEffect(() => {
     
      if(inView){
        animateVideoCaption.start({
          opacity: 1,
          delay:2,
          scale:1,
          transition:{
            ease:'easeIn',
          }
         
        })
       
      }
      if(!inView){
        animateVideoCaption.start({
          opacity: 0,
          delay:10,
          scale:0.75,
          transition:{
            ease:'easeOut',
            
          }
         
        })
      
      }
     
      
    }, [inView]);

  
    return (
      <ParallaxProvider>
            <Parallax scaleX={[0.85, 1]} speed={10} 
             className="moon bg-no-repeat bg-cover mx-auto px-0  relative h-[800px]" >
              <video autoPlay loop muted className={styles.videobg}>
                  <source src='/assets/video/pexels-bmvideo.mp4' type="video/mp4"/>  
              </video>
              
                <motion.div animate={animateVideoCaption} className="border border-white py-[120px] top-[20%] absolute z-1 left-sp-small right-sp-small mx-auto">
                     <div className='absolute left-0 right-0 top-0 bottom-0 blur-[3px] bg-[rgba(0,0,0,0.5)]'>
                    </div>  
                    <h3 className='text-heading2 text-center text-white font-bold z-2 mx-auto relative w-[100%] max-w-[700px]'>
                        Whether you are a small or mid-sized business or a large corporation, Moglix has a solution for you.​
                    </h3>
                    <button className='border border-white h-[50px] w-[220px] rounded-[5px] bg-brand mx-auto text-white relative mt-6 block'>Find More</button>
                </motion.div>
               
            </Parallax>
           <div ref={ref}></div>
      </ParallaxProvider>
    )
  
}

export default Findmore;