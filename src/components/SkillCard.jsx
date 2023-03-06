// import React from 'react';
import styles from '../styles/SkillCard.module.scss';
import Image from 'next/image';

import html from '@icons/codeicon/005-html-5.png';
import css from '@icons/codeicon/006-css-3.png';
import node from '@icons/codeicon/002-node-js.png';
import js from '@icons/codeicon/001-js.png';
import github from '@icons/codeicon/004-github.png';
import api from '@icons/codeicon/007-api.png';
import react from '@icons/codeicon/003-physics.png';
import vercel from '@icons/codeicon/vercel.png';
import git from '@icons/codeicon/Git_icon.svg.png';
import nextjs from '@icons/codeicon/Nextjs-logo.svg';
import tailwind from '@icons/codeicon/Tailwind_CSS_Logo.svg';


import React from 'react';

const images = [
  { id: 1, src: html, alt: 'Html' },
  { id: 2, src: css, alt: 'Css' },
  { id: 3, src: node, alt: 'Node' },
  { id: 4, src: js, alt: 'JS' },
  { id: 5, src: react, alt: 'React' },
  { id: 6, src: api, alt: 'Api' },
  { id: 7, src: git, alt: 'Git' },
  { id: 8, src: github, alt: 'Github' },
  { id: 9, src: vercel, alt: 'Vercel' },
  { id: 10, src: nextjs, alt: 'Nextjs' },
  { id: 11, src: tailwind, alt: 'Tailwind' }
];

function SkillCard() {
  return (
    <section className={styles.contenedorHabilidades}>
      <div className={styles.Titulo}>Tech Skills</div>
        <div className={styles.habilidadesPersonales}>
              
                {images.map((image) => (
                  <div key={image.id}> <Image key={image.id} src={image.src} alt={image.alt} className={styles.skills} width={30} height={30}
                   />
                   <h6 key={image.id}>{image.alt}</h6>
                  </div>
                ))}
          
      </div>
    </section>
  );
}

export default SkillCard;