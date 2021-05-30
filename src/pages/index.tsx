import styles from '../styles/global.module.scss'

import Head from 'next/head'

import Image from 'next/image'

type Post = {
    id: string;
    title: string;
  }
  
  type HomeProps = {
    allPosts: Post[]
  }

export default function Home( { }: HomeProps ) {
    return (   
        <div>
        <Head>
            <title>Sonnezweits | Startseite</title>
        </Head>

            <div className={styles.menu}>

                <ul className={styles.menuLeft}>
                    <li className={styles.itemLeft}>Sonnezweits</li>
                </ul>

                <ul className={styles.menuRight}>
                    <li className={styles.itemRight}><a href="">                 
                <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                    </a></li>
                    <li className={styles.itemRight}><a href="">
                    <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </a></li>
                    <li className={styles.itemRight}><a href="">
                    <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </a></li>
                </ul>

            </div>

    <main>
        <div className={styles.menuVertical}>
            <ul>
                <li><a href="">
                <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                Benachrichtigungen</a></li>
                <li><a href="">
                <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                Mein Notebook</a></li>
                <li><a href="">
                <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                    die Einstellungen</a></li>
                <li><a href="">
                <Image
                  width={15}
                  height={15} 
                  src={'/public/img/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                    Komm zurück</a></li>

            </ul>
        </div>   

            {/* <div className={styles.baseMural}>
                <div className={styles.mural}>
                    <div className={styles.title}>
                        <h1>Hallo, du kannst jetzt deutsch lernen.<br> Gemeinsam bewegen wir uns schneller</h1>
                    </div> */}

                    {/* <div className={styles.card}>
                        <h1>Hallo!</h1>
                        <p>Machen Sie Ihre ersten Schritte</p>
                        <button>anfangen<div className={styles.btnDet}><img src="/img/flag.svg" alt=""></div> </button>
                    </div> */}

                    {/* <div className={styles.card}>
                        <h1>Wörter</h1>
                        <p>lerne Gegenstände, Essen, Menschen zu sprechen ...</p>
                        <button>anfangen<div className={styles.btnDet}><img src="/img/flag.svg" alt=""></div> </button>
                    </div>
                    <div className={styles.card}>
                        <h1>Audiovisuell</h1>
                        <p>Finden Sie deutsche Kanäle, Podcasts und Videos</p>
                        <button>anfangen<div className={styles.btnDet}><img src="/img/flag.svg" alt=""></div> </button>
                    </div>
                </div>
            </div> */}
            </main>
        </div> 
    )
}