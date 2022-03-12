import Image from "next/image"
import styles from "../styles/components/AboutCats.module.css"

export default function AboutCats() {
    return (
        <div className={styles.container}>

            <Image src="/images/CatsBanner.jpg" width="1000" height="343" alt="cat image" layout='responsive' />

            <h1 className={styles.title}>
             Sobre Gatos
            </h1>

            <p className={styles.text}>
                O gato (felis catus) é um mamífero carnívoro e quadrúpede pertencente à família Felidae e à ordem carnívora.
                É um animal doméstico apreciado por caçar ratos e ratazanas. Este animal possui unhas retráteis, ouvidos e olfação bem aguçados,
                uma notável visão noturna e um corpo flexível, musculoso e compacto. Trata-se de um animal com boa memória e com capacidade
                de aprender por meio da observação e da experiência.
                Não se sabe ao certo qual foi o primeiro povo a domesticar o gato,
                embora sua domesticação esteja associada aos egípcios a partir do gato selvagem africano, há mais de 3000 anos a.C.
            </p>

        </div>
    )
}