import Head from 'next/head';
import Footer from '@components/Footer';

import styles from '../styles/Home.module.css';

import Profile from '@components/profile';



export default function Home() {
  return (
    <>
      <Head>
        <title>Julian Andrade | Frontend Programer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Profile />
      
      
      <Footer />
      </main>
    </>
  );
}
