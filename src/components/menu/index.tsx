import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export function Menu(){
    return(
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
                <li className={styles.itemRight}>
                    <a href="">
                        <Image
                            width={15}
                            height={15}
                            src={"/gear.svg"} 
                            alt={'profile'}
                            objectFit="cover"
                        />
                    </a>
                </li>
                <li className={styles.itemRight}>
                <Link href={'/'}>
                    <a href="">
                        <Image
                            width={15}
                            height={15} 
                            src={'/house-door.svg'} 
                            alt={'profile'}
                            objectFit="cover"
                            />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}