//global styles
import '../styles/style.global.scss'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return(

    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp