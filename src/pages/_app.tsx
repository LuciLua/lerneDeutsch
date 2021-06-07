//global styles
import '../styles/style.global.scss'
import styles from '../styles/style.global.scss'

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