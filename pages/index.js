import Head from 'next/head'
import Header from '../layout/header';
import Homebanner from '../components/home/homebanner';
import WhoWeAre from '../components/home/whoWeAre';
import Scrollparallex from '../components/home/scrollparallex';
import Findmore from '../components/home/findmore';
import Counters from '../components/home/counters';
import B2B from '../components/home/b2b';

import ScrollSlider from '../components/home/scrollSlider';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { motion, useAnimation } from "framer-motion";
// import { styles } from '../styles/Home.module.scss';
import AwardsMarquee  from '../components/home/awardsMarquee';
import Transformations from '../components/home/transformations';


export default function Home({children}) {
  return (
    <div>
      <Head>
        <title>Business Moglix App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet=" href='/node_modules/accordion-slider/dist/css/jquery.accordionSlider.min.css' />
        <link rel="stylesheet=" href='/node_modules/accordion-slider/dist/js/jquery.accordionSlider.js' />
      </Head>
     <div className='bm_pagewrapper'>
       <main>
        <section className='w-100'>
            <Homebanner />
            <ParallaxProvider>
            <WhoWeAre />   
            {/* {props.children} */}
            <Findmore />
            <Scrollparallex /> 
            <Counters />

            <B2B />
            <ScrollSlider/>
            </ParallaxProvider>
              <AwardsMarquee/>
            <Transformations/>
                   
        </section>
       </main>
      </div>
       
    </div>
  )
}
