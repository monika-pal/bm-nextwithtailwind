import Head from 'next/head'
import Header from '../layout/header';
import Homebanner from '../components/home/homebanner';
import WhoWeAre from '../components/home/whoWeAre';

export default function Home({children}) {
  return (
    <div>
      <Head>
        <title>Business Moglix App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
     <div className='bm_pagewrapper'>
       <main>
        <section className='w-100'>
            <Homebanner />
            <WhoWeAre />            
        </section>
       </main>
      </div>
       
    </div>
  )
}
