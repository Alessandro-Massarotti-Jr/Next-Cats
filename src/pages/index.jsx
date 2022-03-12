import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutCats from '../components/AboutCats'


export default function Home() {
  return (
    <>
      <Head>
        <title>Next Cats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cat.ico" />
      </Head>
      <AboutCats/>

    </>
  )
}
