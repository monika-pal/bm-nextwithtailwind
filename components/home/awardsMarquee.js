import React from 'react'
import Marquee from "react-easy-marquee";

const  AwardsMarquee = () => {
    const Marquee1Images = ["https://picsum.photos/200", "https://picsum.photos/100"];
  return (
    <div>
          <section className=' py-sp-big'>
          <h2 className='text-heading1 font-bold text-secondary text-center'>Transforming B2B commerce and supply chain</h2>
         <h3 className='text-lg font-regular text-secondary text-center mb-[60px]'>Our work is being recognised by renowned organisations</h3>
        <Marquee duration={10000} background="#ffffff" height="250px" pauseOnHover={true}>
        <h1>I go weee!</h1>

        {Marquee1Images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
      <Marquee duration={10000} background="#ffffff" height="250px" pauseOnHover={true}  reverse={true}>
        <h1>I go weee!</h1>

        {Marquee1Images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
      </section>
    </div>
  )
}
export default AwardsMarquee;
