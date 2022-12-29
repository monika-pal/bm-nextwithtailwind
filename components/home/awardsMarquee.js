import React from 'react'
import Marquee from "react-easy-marquee";

const  AwardsMarquee = () => {
    const Marquee1Images = ["/assets/img/award1.png","/assets/img/award2.png","/assets/img/award3.png","/assets/img/award4.png","/assets/img/award5.png","/assets/img/award6.png","/assets/img/award7.png","/assets/img/award8.png","/assets/img/award9.png"];
  return (
    <div>
          <section className=' py-sp-big'>
          <h2 className='text-heading1 font-bold text-secondary text-center md:text-xxl'>Transforming B2B commerce and supply chain</h2>
         <h3 className='text-lg font-regular text-secondary text-center mb-[60px]'>Our work is being recognised by renowned organisations</h3>
        <Marquee duration={18000} background="#ffffff" height="175px" pauseOnHover={true}>


        {Marquee1Images.map((image) => (
             <div className='marquee-card'>
          <img src={image} alt="picsum" />
          </div>
        ))}
      </Marquee>
      <Marquee duration={18000} background="#ffffff" height="175px" pauseOnHover={true}  reverse={true}>
        {Marquee1Images.map((image) => (
          <>
          <div className='marquee-card'>
          <img src={image} alt="picsum" />
          </div>
          </>
        ))}
      </Marquee>
      </section>
    </div>
  )
}
export default AwardsMarquee;
