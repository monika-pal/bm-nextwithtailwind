import React, { Component, useEffect,useRef } from 'react';
import styles from '../../styles/counter.module.scss';
import { motion, useAnimation,animate } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function CounterUnit({ from, to })   {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef)
    
  
    useEffect(() => {
      const node = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 1,
        delay:1.1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        }
      });
  
      return () => controls.stop();
    }, [from, to, isInView]);
  
    return <span ref={nodeRef} />;
  }

const Counters =()=> {

    const {ref, inView} = useInView();
    const animationdot1 = useAnimation();
    const animationdot12 = useAnimation();
    const showanimationdot1 = useAnimation();
    const animationdot2 = useAnimation();
    const showanimationdot2 = useAnimation();
    const animationdot3 = useAnimation();
    const showanimationdot3 = useAnimation();
    const animationdot4 = useAnimation();
    const animationdot42 = useAnimation();
    const showanimationdot4 = useAnimation();
    const animatecontent = useAnimation();
    // const animationdot2 = useAnimation();
    // const animationdot3 = useAnimation();
    // const animationdot4 = useAnimation();

  
    useEffect(() => {
        
      if(inView){
        animationdot1.start({
            scaleX:1,
            transformOrigin:'right',
            transition:{
                duration:0.6,
                ease:'easeIn'
            },
            animationDirection:'reverse'
          
            
        })
        animationdot12.start({
          scaleY:1,
          transformOrigin:'bottom',
            transition:{
                duration:0.6,
                delay:0.7
            },
            animationDirection:'reverse'
        })
        showanimationdot1.start({
            visibility:'visible',
            transition:{
                delay:1,
                ease:'easeIn'
            }
        })
        animationdot2.start({
            scaleY:1,
            transformOrigin:'bottom',
              transition:{
                duration:0.6,
                ease:'easeIn'
              },
              animationDirection:'reverse'
          })
          showanimationdot2.start({
            visibility:'visible',
            transition:{
                delay:1,
                ease:'easeIn'
            }
        })
        animationdot3.start({
            scaleY:1,
            transformOrigin:'bottom',
              transition:{
                duration:0.6,
                ease:'easeIn'
              },
              animationDirection:'reverse'
          })
          showanimationdot3.start({
            visibility:'visible',
            transition:{
                delay:1.1,
                ease:'easeIn'
            }
        })
        animationdot4.start({
            scaleX:1,
            transformOrigin:'left',
            transition:{
                duration:0.6,
                ease:'easeIn'
            },
            animationDirection:'reverse'
          
            
        })
        animationdot42.start({
          scaleY:1,
          transformOrigin:'bottom',
            transition:{
                duration:0.6,
                delay:0.7
            },
            animationDirection:'reverse'
        })
        showanimationdot4.start({
            visibility:'visible',
            transition:{
                delay:1.1,
                ease:'easeIn'
            }
        })
        animatecontent.start({
            visibility:'visible',
            transition:{
                duration:1,
                ease:'easeIn',
                delay:1.1
            }, 
        })
    //    this.CounterUnit()
      }
      if(!inView){
        animationdot1.start({
            scaleX:0,  
            transformOrigin:'right',
            transition:{
                duration:0.6,
                delay:1
            },  
        })
        animationdot12.start({
            scaleY:0,
            transformOrigin:'bottom',
            transition:{
                duration:0.6,
                delay:0
            },
            animationDirection:'reverse'
        })
        showanimationdot1.start({
            visibility:'hidden',
            transition:{
                delay:0,
                ease:'easeOut'
            }
        })
        animationdot2.start({
            scaleY:0,
            transformOrigin:'bottom',
            transition:{
                duration:0.6,
                // delay:1
            },
            animationDirection:'reverse'
          })
          showanimationdot2.start({
            visibility:'hidden',
            transition:{
                delay:0,
                ease:'easeOut'
            }
        })
        animationdot3.start({
            scaleY:0,
            transformOrigin:'bottom',
            transition:{
                duration:0.6,
                // delay:1
            },
            animationDirection:'reverse'
          })
        showanimationdot3.start({
            visibility:'hidden',
            transition:{
                delay:0,
                ease:'easeOut'
            }
        })
        animationdot4.start({
            scaleX:0,  
            transformOrigin:'left',
            transition:{
                duration:0.6,
                delay:1
            },  
        })
        animationdot42.start({
            scaleY:0,
            transformOrigin:'bottom',
            transition:{
                duration:0.6,
                delay:0
            },
            animationDirection:'reverse'
        })
        showanimationdot4.start({
            visibility:'hidden',
            transition:{
                delay:0,
                ease:'easeOut'
            }
        })
        animatecontent.start({
            visibility:'hidden',
            transition:{
                duration:1,
                ease:'easeOut',
                delay:0.3
            }, 
        })
      
      }
     
      
    }, [inView]);
  
    return (
      <section  className='py-sp-big overflow-x-hidden bg-[url("/assets/img/dotted_background.jpg")] bg-no-repeat bg-cover'>
            <div className='container-none md:container lg:container mx-auto py-5 px-3 text-center'>
                <h2 className='text-heading1 font-bold text-secondary text-center'>The numbers behind the <br/>strength of Moglix’s solutions</h2>
                <div className='h-[430px] flex w-full relative pt-[80px]'>
                    <div className='w-[25%] relative'>
                        <motion.div animate={animatecontent} className='mt-[110px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>
                            <CounterUnit from={0} to={45} />+</h3>
                            <span className='text-secondary text-textxl'>Categories</span>
                        </motion.div>
                        <motion.div animate={animationdot1} className={[styles.counterdotline,styles.counterdotline1].join(' ')}>
                            <motion.span animate={showanimationdot1} className={[styles.counterdot,styles.counterdot1].join(' ')}></motion.span>
                        </motion.div>
                        <motion.div animate={animationdot12} className={[styles.counterdotline12]}></motion.div>
                    </div>
                    <div className='w-[25%] relative'>
                        <motion.div animate={animatecontent} className='mt-[80px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>
                            <CounterUnit from={100} to={500} />+</h3>
                            <span className='text-secondary text-textxl'>Enterprises trusts us</span>
                        </motion.div>
                        <motion.div animate={animationdot2} className={[styles.counterdotline,styles.counterdotline2].join(' ')}>
                            {/* <div className={[styles.counterdotline22]}></div> */}
                            <motion.span animate={showanimationdot2} className={[styles.counterdot,styles.counterdot2].join(' ')}></motion.span>

                        </motion.div>
                    </div>
                    <div className='w-[25%] relative'>
                        <motion.div animate={animatecontent} className='mt-[50px]'>
                            <h3 className='text-secondary text-[60px] font-semibold'>
                            <CounterUnit from={15900} to={16000} />+</h3>
                            <span className='text-secondary text-textxl'>Suppliers</span>
                        </motion.div>
                        <motion.div animate={animationdot3} className={[styles.counterdotline,styles.counterdotline3].join(' ')}>
                        <motion.span animate={showanimationdot3} className={[styles.counterdot,styles.counterdot3].join(' ')}></motion.span>

                        </motion.div>
                    </div>
                    <div className='w-[25%] relative'>
                        <motion.div animate={animatecontent} className=''>
                            <h3 className='text-secondary text-[60px] font-semibold'>
                            <CounterUnit from={400} to={500} />K+</h3>
                            <span className='text-secondary text-textxl'>SMEs</span>
                        </motion.div>
                        <motion.div animate={animationdot4} className={[styles.counterdotline,styles.counterdotline4].join(' ')}>
                            <motion.span animate={showanimationdot4}  className={[styles.counterdot,styles.counterdot4].join(' ')}></motion.span>

                        </motion.div>
                        <motion.div animate={animationdot42} className={[styles.counterdotline42]}></motion.div>
                    </div>

                </div>
            <div className='inline-block w-auto'  ref={ref}>
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
            
            {/* <br /> */}
      </section>
    )
  
}

export default Counters;