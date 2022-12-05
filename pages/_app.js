import '../styles/globals.scss';
import Header from '../layout/header';

function MyApp({ Component, pageProps }) {
  
  return <>
  <Header />
  <Component {...pageProps} />
  </>
}

export default MyApp
