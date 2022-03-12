import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Navbar.module.css'


export default function Navbar() {
    return (

        <div className={styles.navbar}>
            <div>
                <Link href="/">
                    <a>
                        <Image src="/images/Cat.png" width="50px" height="50px" alt="cat icon" />
                    </a>
                </Link>
            </div>
            <div className={styles.nav}>
                <Link href="/">
                    <a>
                        Home
                        
                    </a>
                </Link>

                <Link href="/breeds">
                    <a>
                        Raças
                    </a>
                </Link>
            </div>
        </div>

    )
}