import React from 'react';
import styles from '@styles/Footer.module.scss';
//import facebook from '../assets/icons/Social Media/003-facebook-1.png';
//import email from '../assets/icons/Social Media/010-gmail.png';
//import whatsapp from '../assets/icons/Social Media/006-whatsapp.png';
//import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <>
    <div className={styles.footer}>TITULO DE FOOTER
        <div className={styles.socialmediacontainer}>
            acá van los iconos

        </div>

    </div>
    </>
  )
}

export default Footer