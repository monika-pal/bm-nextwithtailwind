import '../styles/globals.scss';
import '../styles/transition.css';
import Header from '../layout/header';
import Footer from '../layout/footer';

function MyApp({ Component, pageProps }) {
  
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
