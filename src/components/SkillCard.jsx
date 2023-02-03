import React from 'react';
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

const SkillCard = () => {
  return (
    <setion className={styles.contenedorHabilidades}>
    <div className={styles.Titulo}>Tech Skills</div>
    <div className={styles.habilidadesPersonales}>
          <div className={styles.skills}><Image className={styles.skillsimg} src={html} alt="Html"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={css} alt="css"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={node} alt="node"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={js} alt="js"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={react} alt="react"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={api} alt="api"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={git} alt="git" width={30} height={30} /></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={github} alt="github"/></div>
          <div className={styles.skills}><Image className={styles.skillsimg} src={vercel}  alt="vercel"width={30} height={30} /></div>
    </div>
</setion>
  );
};
export default SkillCard;