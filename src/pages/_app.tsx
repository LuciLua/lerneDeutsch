//global styles
import '../styles/style.global.scss'

import Head from 'next/head'

import Image from 'next/image';

function MyApp({ Component, pageProps }) {

  return(

    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp