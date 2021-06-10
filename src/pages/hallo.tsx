import styles from './hallo.module.scss'

type HalloProps = {}

export default function Hallo ( {}: HalloProps){
    return(
        <>
        <main>
            <div className={'page'}>
                <div className={styles.main}>
                    <h1>
                        Hallo, aprenda a iniciar uma conversa!
                    </h1>

                    <div className={styles.names}>
                        <div className={styles.femMas}>
                            <h2>Frau</h2>
                            <h3>Fräu</h3>
                            <p>Usado para feminino</p>
                        </div>
                        <div className={styles.femMas}>
                            <h2>Herr</h2>
                            <h3>rér</h3>
                            <p>Usado para masculino</p>
                        </div>
                        <div className={styles.femMas}>
                            <h2>Vorname</h2>
                            <h3>förname</h3>
                            <p>Primeiro nome</p>
                        </div>
                        <div className={styles.femMas}>
                            <h2>Familienname</h2>
                            <h3>familianname</h3>
                            <p>Último nome</p>
                        </div>
                    </div>
                        <div className={styles.dialogos}>
                            <div className={styles.dialogoP}>
                                <h2>Wie heißen Sie?</h2>
                                <h3>Vi raissen zï?</h3>
                                <p>Como se chama?</p>
                            </div>
                            <div className={styles.dialogoR}>
                                <h2>Ich bin FRAU/HERR Motta</h2>
                                <h3>Ish bin FRÄU/RÉR) + (FAMILIENNAME)</h3>
                                <p>Eu sou Motta</p>
                            </div>
                        </div>


                </div>
            </div>
        </main>
        </>
    )
}