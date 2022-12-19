import React, { useEffect,useState,useRef } from 'react';
import { motion, useAnimation,useScroll, useSpring  } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import styles from '../../styles/b2b.module.scss';

const B2B =()=> {
  const refSCROLL = useRef(null);
  const { scrollYProgress } = useScroll(refSCROLL);
 

    // const [scrollPos, getscrollPos] = useState(0);
    const {ref, inView} = useInView();
    const animatepara = useAnimation();

  
    useEffect(() => {
     
     
      if(inView){
        animatepara.start({
            x:10,
          transition:{
            type: "spring",
            // bounce: 0.4,
            duration: 1,
            // ease:'easeIn'
            // delay:200,
          }
        
         
        })
       
      }
      if(!inView){
        animatepara.start({
            x:500,
            transition: {
                type: "spring",
                // bounce: 0.4,
                duration: 1,
                // ease:'easeInOut'
                // delay:100
              }
            
         
        })
      
      }
     
      
    }, [inView]);
 
    return (
      <div className='z-[1] relative' ref={refSCROLL}>
              <div class="container-none md:container left-0 right-0 lg:container mx-auto py-5 px-3 text-center absolute top-0 bottom-0">
                <motion.div className={[styles.dashedLine,styles.dashedLine1].join(' ')} style={{ scaleY:scrollYProgress }}> </motion.div>
                <motion.div className={[styles.dashedLine,styles.dashedLine2].join(' ')} style={{ scaleY:scrollYProgress }}></motion.div>
                <motion.div className={[styles.dashedLine,styles.dashedLine3].join(' ')} style={{ scaleY:scrollYProgress }}> </motion.div>
                <motion.div className={[styles.dashedLine,styles.dashedLine4].join(' ')} style={{ scaleY:scrollYProgress }}> </motion.div>
                <motion.div className={[styles.dashedLine,styles.dashedLine5].join(' ')} style={{ scaleY:scrollYProgress }}></motion.div>
                <motion.div className={[styles.dashedLine,styles.dashedLine6].join(' ')} style={{ scaleY:scrollYProgress }}></motion.div>
            </div>
      <section className='overflow-x-hidden z-[2] relative'>
          <div className='container-none md:container lg:container mx-auto py-5 px-3 text-center'>
            <div className="flex justify-end items-center bg-[url('/assets/img/rB2Bimg.jpg')] py-[8rem] bg-no-repeat bg-contain">
                <motion.div className='w-2/3 bg-brand p-[5rem]' animate={animatepara}>
                    <p className='text-white text-heading2 font-bold text-left'>
                    At Moglix Business we are on a mission to reimagine B2B commerce and supply chain practice for enterprises.
                    </p>
                </motion.div>
            </div>
            </div>
         <br ref={ref} />
      </section>
      <section className='z-[2] relative'>
        <div className='container-none md:container lg:container mx-auto py-5 px-3 text-center'>
          <div className='flex flex-wrap mx-[-20px]'>
            <div className='w-1/3 pr-[20px] pl-[40px]'>
                <h2 className='text-lg text-brand font-medium text-left mb-2'>We partner with enterprises to</h2>
                <p className='text-textxl text-secondary font-medium items-center text-left leading-[41px] pr-2'>
                offer greater predictability, visibility, cost efficiency and agility at scale to their supply chain and procurement practice.
                </p>
            </div>
            <div className='w-1/3 px-[20px]'>
                <figure className="bg-[url('/assets/img/wp1.jpg')] bg-no-repeat bg-cover h-[290px] relative group/item overflow-hidden">
                    <div className='text-base2 text-white absolute bottom-[-60%] transition-all duration-300 group-hover/item:bottom-0 ease-in text-left invisible group-hover/item:visible p-2 pt-sp-big bg-gradient-to-b from-[transparent] to-black'>We partner with vendors to create an inclusive and exhaustive ecosystem for procurement</div>
                </figure>
                <h2 className='text-lg text-secondary font-medium h-sp-big pt-2'>Vendor consolidation</h2>
                
            </div>
            <div className='w-1/3 px-[20px]'>
                <figure className="bg-[url('/assets/img/wp2.jpg')] bg-no-repeat bg-cover h-[290px] relative group/item overflow-hidden">
                <div className='text-base2 text-white absolute bottom-[-60%] transition-all duration-300 group-hover/item:bottom-0 ease-in text-left invisible group-hover/item:visible p-2 pt-sp-big bg-gradient-to-b from-[transparent] to-black'>We partner with vendors to create an inclusive and exhaustive ecosystem for procurement</div>
                </figure>
                <h2 className='text-lg  text-secondary font-medium h-sp-big pt-2'>Complete visibility </h2>
                
            </div>
            <div className='w-1/3 px-[20px]'>
                <figure className="bg-[url('/assets/img/wp3.jpg')] bg-no-repeat bg-cover h-[290px] relative group/item overflow-hidden">
                <div className='text-base2 text-white absolute bottom-[-60%] transition-all duration-300 group-hover/item:bottom-0 ease-in text-left invisible group-hover/item:visible p-2 pt-sp-big bg-gradient-to-b from-[transparent] to-black'>We partner with vendors to create an inclusive and exhaustive ecosystem for procurement</div>
                </figure>
                <h2 className='text-lg  text-secondary font-medium h-sp-big pt-2'>Online dashboard </h2>
                 
            </div>
            <div className='w-1/3 px-[20px]'>
                <figure className="bg-[url('/assets/img/wp4.jpg')] bg-no-repeat bg-cover h-[290px] relative group/item overflow-hidden">
                <div className='text-base2 text-white absolute bottom-[-60%] transition-all duration-300 group-hover/item:bottom-0 ease-in text-left invisible group-hover/item:visible p-2 pt-sp-big bg-gradient-to-b from-[transparent] to-black'>We partner with vendors to create an inclusive and exhaustive ecosystem for procurement</div>
                </figure>
                <h2 className='text-lg text-secondary font-medium h-sp-big pt-2'>Tech-enabled tracking </h2>
                
            </div>
            <div className='w-1/3 px-[20px]'>
                <figure className="bg-[url('/assets/img/wp5.jpg')] bg-no-repeat bg-cover h-[290px] relative group/item overflow-hidden">
                <div className='text-base2 text-white absolute bottom-[-60%] transition-all duration-300 group-hover/item:bottom-0 ease-in text-left invisible group-hover/item:visible p-2 pt-sp-big bg-gradient-to-b from-[transparent] to-black'>We partner with vendors to create an inclusive and exhaustive ecosystem for procurement</div>
                </figure>
                <h2 className='text-lg text-secondary font-medium h-sp-big pt-2'>Integrated procurement platform </h2>
                
            </div>
          </div>
            
        </div>
      </section>
      </div>
      

    )
  
}

export default B2B;