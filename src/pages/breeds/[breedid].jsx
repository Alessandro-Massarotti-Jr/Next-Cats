import Link from "next/link"
import Head from "next/head";
import Image from "next/image";
import CatSingle from "../../components/CatSingle";


export async function getStaticProps(context) {

    const { params } = context;


    const url = 'https://api.thecatapi.com/v1/breeds/' + params.breedid

    const data = await fetch(url,)


    const breed = await data.json()

    const imageUrl = 'https://api.thecatapi.com/v1/images/' + breed.reference_image_id

    const imageData = await fetch(imageUrl,)

    const image = await imageData.json()

    return {
        props: { breed, image },
    }
}





export async function getStaticPaths() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await response.json()

    const paths = data.map((breed) => {
        return {
            params: {
                breedid: `${breed.id}`,
            },
        }
    })

    return { paths, fallback: false }
}







export default function Breed({ breed, image }) {


    return (
        <>
            <Head>
                <title>Next Cats - {breed.name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

           <CatSingle id={breed.id} image={image.url ? image.url:"/images/404cat.jpg"} name={breed.name} temperament={breed.temperament} description={breed.description} origin={breed.origin} life={breed.life_span} />
        </>
    )
}