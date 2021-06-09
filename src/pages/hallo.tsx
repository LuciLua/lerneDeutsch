import styles from './hallo.module.scss'

type HalloProps = {}

export default function Hallo ( {}: HalloProps){
    return(
        <>
        <main>
            <div className={'page'}>
                <div className={styles.main}>
                    <h1>
                        Hallo
                    </h1>
                </div>
            </div>
        </main>
        </>
    )
}