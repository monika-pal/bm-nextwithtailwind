import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const B2B =()=> {

    const {ref, inView} = useInView();
    const animatepara = useAnimation();

  
    useEffect(() => {
     
      if(inView){
        animatepara.start({
          x:500,
          type:'spring'
         
        })
       
      }
      if(!inView){
        animatepara.start({
            x:-500,
            type:'spring'
         
        })
      
      }
     
      
    }, [inView]);
 
    return (
      <section ref={ref}>
         <div className='container-none md:container lg:container mx-auto py-5 px-3 text-center'>
            <div className="flex justify-end items-center bg-[url('/assets/img/rB2Bimg.jpg')] py-[8rem] bg-no-repeat bg-contain">
                <motion.div className='w-2/3 bg-brand p-[5rem]'>
                    <p className='text-white text-heading2 font-bold text-left'>
                    At Moglix Business we are on a mission to reimagine B2B commerce and supply chain practice for enterprises.
                    </p>
                </motion.div>
            </div>
         </div>
      </section>
    )
  
}

export default B2B;