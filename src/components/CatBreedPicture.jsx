import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/CatBreedPicture.module.css'


export default function CatBreedPicture({ id, name, image,link }) {
    return (
        <Link href={link}>
            <a className={styles.cats} key={id}>
                <div className={styles.image}>
                    <Image className={styles.catimg} src={image} alt={name} width="500" height="500" />
                </div>
                <div className={styles.content}>
                    <h1>{name}</h1>
                </div>
            </a>
        </Link>

    )
}