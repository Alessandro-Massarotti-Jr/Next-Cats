import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/CatSingle.module.css'


export default function CatSingle({ id, image, name, temperament, description, origin, life }) {
    return (
        <div className={styles.catInfo}>
            <div className={styles.catImageContainer}>
                <Image className={styles.catImage} src={image} alt={name}  layout="fill" />
            </div>
            <div className={styles.content}>
                <h1>{name}</h1>
                <h2>description: </h2>
                <p>{description} </p>
                <h2>temperament:</h2>
                <p>{temperament}</p>
                <h2>origin: </h2>
                <p>{origin}</p>
                <h2>life span: </h2>
                <p>{life}</p>
            </div>
        </div>
    )
}