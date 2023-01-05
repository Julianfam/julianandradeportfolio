import React from 'react';
import Head from 'next/head';
import styles from '../styles/diplomascontainer.module.scss';
import Image from 'next/image';

import diploma from '../assets/img/Diplomas/diploma-asincronismo-js-1.png';
import diploma2 from '../assets/img/Diplomas/diploma-basico-javascript-1.png';
import diploma3 from '../assets/img/Diplomas/diploma-css-grid-layout-1.png';
import diploma4 from '../assets/img/Diplomas/diploma-ecmascript-6-1.png';
import diploma5 from '../assets/img/Diplomas/diploma-ecmascript-nuevo-1.png';
import diploma6 from '../assets/img/Diplomas/diploma-flexbox-css-grid-1.png';
import diploma7 from '../assets/img/Diplomas/diploma-frontend-developer-1.png';
import diploma8 from '../assets/img/Diplomas/diploma-frontend-developer-practico-1.png';
import diploma9 from '../assets/img/Diplomas/diploma-git-github-1.png';
import diploma10 from '../assets/img/Diplomas/diploma-html-css-1.png';
import diploma11 from '../assets/img/Diplomas/diploma-html-practico-1.png';
import diploma12 from '../assets/img/Diplomas/diploma-introduccion-csharp-1.png';
import diploma13 from '../assets/img/Diplomas/diploma-javascript-practico-2021-1.png';
import diploma14 from '../assets/img/Diplomas/diploma-mobile-first-1.png';
import diploma15 from '../assets/img/Diplomas/diploma-nextjs-practico-1.png';
import diploma16 from '../assets/img/Diplomas/diploma-npm-1.png';
import diploma17 from '../assets/img/Diplomas/diploma-npm-js-1.png';
import diploma18 from '../assets/img/Diplomas/diploma-pensamiento-logico-1.png';
import diploma19 from '../assets/img/Diplomas/diploma-preprocesadores-1.png';
import diploma20 from '../assets/img/Diplomas/diploma-prework-windows-1.png';
import diploma21 from '../assets/img/Diplomas/diploma-react-practico-1.png';
import diplomad22 from '../assets/img/Diplomas/diploma-webpack-1.png';    


const DiplomaContainer = () => {
  return (
    <>
    <Head>
      Diplomas
    </Head>
    <section className={styles.contenedordiploma}>
  <Image className={styles.diplomaimg} alt="diploma" src={diploma}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma2}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma3}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma4}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma5}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma6}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma7}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma8}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma9}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma10}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma11}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma12}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma13}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma14}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma15}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma16}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma17}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma18}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma19}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma20}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diploma21}/>;
  <Image className={styles.diplomaimg} alt="diploma" src={diplomad22}/>;
  </section>
  </>
  );
};

export default DiplomaContainer;