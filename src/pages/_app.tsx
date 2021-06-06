//global styles
import '../styles/style.global.scss'

import Head from 'next/head'

import Image from 'next/image';
import { MenuVertical } from '../components/menuVertical';
import { Menu } from '../components/menu';

function MyApp({ Component, pageProps }) {

  return(

    <>
    <div>
      <Menu/>
          <main>
      <MenuVertical/>
          <Component {...pageProps} />
          </main>
    </div>
    </>
  )
}

export default MyApp