import React from 'react';
import Image from 'next/image';
import styles from '@styles/Slider.module.scss';
import img1 from '../assets/img/pexelsalenadarmel7862509Smaller.jpg';
const Slider = () => {
  return (
    <div className={styles.Slider}>

      <section className={styles.contenedorImagenes}>
          <Image className={styles.imagenSlider} src= {img1} alt="Banner principal"/>
      </section>
    </div>
  );
};

export default Slider;