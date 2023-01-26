import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import NavBar from './../components/NavBar'
import { NextUIProvider } from '@nextui-org/react';



function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <>
        <NavBar></NavBar>
        <Banner></Banner>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
        <Footer></Footer>
      </>
    </SSRProvider>
  )
}

export default MyApp
