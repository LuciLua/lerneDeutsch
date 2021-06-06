import styles from '../styles/global.module.scss'

import Head from 'next/head'

import Image from 'next/image' 
import { textChangeRangeNewSpan } from 'typescript'

type HomeProps = { }

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
                    <li className={styles.itemRight}>
                        <a href="">                    
                <Image
                  width={15}
                  height={15} 
                  src={'/bell.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                    </a>
                    </li>
                    <li className={styles.itemRight}><a href="">
                    <Image
                  width={15}
                  height={15}
                  src={"/gear.svg"} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </a></li>
                    <li className={styles.itemRight}><a href="">
                    <Image
                  width={15}
                  height={15} 
                  src={'/house-door.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </a></li>
                </ul>

            </div>

    <main>
        <div className={styles.menuVertical} title={styles.menuVertical}>
            <div className={styles.push}></div>
            <ul>
                <li><a href="">
                <div className={styles.imgMenu}>
                <Image
                  width={15}
                  height={15} 
                  src={'/bell.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </div>
                Benachrichtigungen</a></li>

                <li><a href="">
                <div className={styles.imgMenu}>
                <Image
                  width={15}
                  height={15} 
                  src={'/journal.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </div>
                Mein Notebook</a></li>
                <li><a href="">
                <div className={styles.imgMenu}>
                <Image
                  width={15}
                  height={15} 
                  src={'/gear.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </div>
                die Einstellungen</a></li>
                <li><a href="">
                <div className={styles.imgMenu}>
                <Image
                  width={15}
                  height={15} 
                  src={'/people.svg'} 
                  alt={'profile'}
                  objectFit="cover"
                />
                </div>
                Komm zurück</a></li>

            </ul>
        </div>   

            <div className={styles.baseMural}>
                <div className={styles.mural}>
                    <div className={styles.title}>
                        <h1>Hallo, du kannst jetzt deutsch lernen.<br/> Gemeinsam bewegen wir uns schneller</h1>
                    </div>

                    <div className={styles.card}>
                        <h1>Hallo!</h1>
                        <p>Machen Sie Ihre ersten Schritte</p>
                        <button>anfangen<div className={styles.btnDet}>
                        <Image
                            width={0}
                            height={0} 
                            src={'/flag.svg'} 
                            alt={'profile'}
                            objectFit="cover"
                        />
                            </div> </button>
                    </div>
                    <div className={styles.card}>
                        <h1>Wörter</h1>
                        <p>lerne Gegenstände, Essen, Menschen zu sprechen ...</p>
                        <button>anfangen<div className={styles.btnDet}>
                        <Image
                            width={0}
                            height={0} 
                            src={'/flag.svg'} 
                            alt={'profile'}
                            objectFit="cover"
                        />
                            </div> </button>
                    </div>

                    <div className={styles.card}>
                        <h1>Audiovisuell</h1>
                        <p>Finden Sie deutsche Kanäle, Podcasts und Videos</p>
                        <button>anfangen<div className={styles.btnDet}>
                        <Image
                            width={0}
                            height={0} 
                            src={'/flag.svg'} 
                            alt={'profile'}
                            objectFit="cover"
                        />
                            </div> </button>
                    </div>

                </div>
                </div>
            </main>
        </div> 
    )
}