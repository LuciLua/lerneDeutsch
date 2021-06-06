import styles from '../styles/global.module.scss'
import Head from 'next/head'
import Image from 'next/image' 

type HomeProps = { }

export default function Home( { }: HomeProps ) {
    return (   
        <main>        
            <Head>
                <title>Sonnezweits | Startseite</title>
            </Head>
            <div className={styles.baseMural}>
                <div className={styles.mural}>
                    <div className={styles.title}>
                        <h1>Hallo, du kannst jetzt deutsch lernen.<br/> Gemeinsam bewegen wir uns schneller</h1>
                    </div>
                    <div className={styles.card}>
                        <h1>Hallo!</h1>
                        <p>Machen Sie Ihre ersten Schritte</p>
                        <button>anfangen
                            <div className={styles.btnDet}>
                                <Image
                                    width={0}
                                    height={0} 
                                    src={'/flag.svg'} 
                                    alt={'profile'}
                                    objectFit="cover"
                                />
                            </div> 
                        </button>
                    </div>
                    <div className={styles.card}>
                        <h1>Wörter</h1>
                        <p>lerne Gegenstände, Essen, Menschen zu sprechen ...</p>
                        <button>anfangen
                            <div className={styles.btnDet}>
                                <Image
                                    width={0}
                                    height={0} 
                                    src={'/flag.svg'} 
                                    alt={'profile'}
                                    objectFit="cover"
                                />
                            </div> 
                        </button>
                    </div>
                    <div className={styles.card}>
                        <h1>Audiovisuell</h1>
                            <p>Finden Sie deutsche Kanäle, Podcasts und Videos</p>
                        <button>anfangen
                            <div className={styles.btnDet}>
                                <Image
                                    width={0}
                                    height={0} 
                                    src={'/flag.svg'} 
                                    alt={'profile'}
                                    objectFit="cover"
                                />
                            </div> 
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}