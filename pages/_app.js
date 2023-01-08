import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/footer'
import Banner from '../components/Banner'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { EnkaNetwork } from 'enkanetwork';
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
