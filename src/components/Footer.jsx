import styles from '../styles/components/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <h1>Menu</h1>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                    <Link href="/breeds">
                    <a>Raças</a>
                    </Link>
                    <Link href="/about">
                    <a>Sobre</a>
                    </Link>
                </div>

<div className={styles.separator}><ion-icon className={styles.icon} name="code-slash-outline"></ion-icon></div>

                <div className={styles.social}>
                    <h1>Social</h1>
               <a href=""><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp</a>
               <a href=""><ion-icon name="logo-youtube"></ion-icon> Youtube</a>
               <a href=""><ion-icon name="logo-discord"></ion-icon> Discord</a>
               <a href=""><ion-icon name="logo-twitter"></ion-icon> Twitter</a>
               <a href=""><ion-icon name="logo-twitch"></ion-icon> Twitch</a>
               <a href=""><ion-icon name="logo-facebook"></ion-icon> Facebook</a>
               <a href=""><ion-icon name="logo-linkedin"></ion-icon> Linkedin</a>

                </div>

            </div>

            <div className={styles.linha}></div>

            <div className={styles.end}>
                <p>Next Cats as Cats API</p>
            </div>
        </footer>

    )
}