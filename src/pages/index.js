import Head from 'next/head';
import MainPage from '@containers/MainPage';

import styles from '../styles/Home.module.css';





export default function Home() {
  return (
    <>
      <Head>
        <title>Julian Andrade | Javascript Programer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <MainPage />
      </main>
    </>
  );
}
