import Image from 'next/image'
import styles from './style.module.scss'
export function MenuVertical(){
  return(

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
  )
}