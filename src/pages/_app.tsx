//global styles
import '../styles/style.global.scss'

import { MenuVertical } from '../components/menuVertical';
import { Menu } from '../components/menu';

import Head from 'next/head'

import NProgress from 'nprogress'
import Router from 'next/dist/next-server/lib/router/router';

import styles from '../styles/global.module.scss'


Router.events.on("routeChangeStart", (url) =>{
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


function MyApp({ Component, pageProps }) {

  return(
    <>
    <div className={styles.all}>
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