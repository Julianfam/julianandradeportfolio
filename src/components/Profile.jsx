import React from 'react';
import styles from '@styles/profile.module.scss';
import Image from 'next/image';
import imgperfil from '../assets/img/pngjuliancamisablanca.png';

import html from '../assets/icons/codeicon/005-html-5.png';
import css from '../assets/icons/codeicon/006-css-3.png';
import node from '../assets/icons/codeicon/002-node-js.png';
import js from '../assets/icons/codeicon/001-js.png';
import github from '../assets/icons/codeicon/004-github.png';
import api from '../assets/icons/codeicon/007-api.png';
import react from '../assets/icons/codeicon/003-physics.png';
import vercel from '../assets/icons/codeicon/vercel.png';
import git from '../assets/icons/codeicon/Git_icon.svg.png';

import projectimg1 from '../assets/img/pexelsalenadarmel7862509Small.jpg';



const Profile = () => {




  return (
    <>
    <section>

    {/* Profile Card */}
      <div className={styles.contenedorPerfil}>
          <div className={styles.perfilNombre}>JULIAN ANDRADE </div>
          <div className={styles.PerfilFoto}>
            <Image className={styles.PerfilFotoImg}src={imgperfil}alt="profileimage"></Image>
          </div>
          <div className={styles.PerfilProfesion}>FRONTEND DEVELOPER</div>
      </div>  




    {/* Skill Card */}  
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

      {/* Proyect Card */}
  <div className={styles.Titulo}>Proyects</div>
      {/* proyecto numero uno  */}


      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}alt="imageproyecto"></Image></div>
            <div className={styles.proyectoTitulo}>E-commerce Shopping cart</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html} alt="Html"/>
              <Image className={styles.skillsProyectoimg} src={css} alt="Css"/>
              <Image className={styles.skillsProyectoimg} src={api} alt="api"/>
              <Image className={styles.skillsProyectoimg} src={react} alt="react"/>
              <Image className={styles.skillsProyectoimg} src={github} alt="github"/>
          </div>
      </div>
      
      {/* proyecto numero dos */}
      
      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}alt="imageproyecto2"></Image></div>
            <div className={styles.proyectoTitulo}>Buisness Landing Page</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html}alt="Html"/>
              <Image className={styles.skillsProyectoimg} src={css}alt="css"/>
          </div>
      </div>
      
      {/* proyecto numero tres */}
      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}alt="imageproyecto3"></Image></div>
            <div className={styles.proyectoTitulo}>Personal Buisness Card</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html} alt="Html"/>
              <Image className={styles.skillsProyectoimg} src={css} alt="css"/>
              <Image className={styles.skillsProyectoimg} src={vercel} width={30} height={30} alt="vercel"/>
              <Image className={styles.skillsProyectoimg} src={git} width={30} height={30} alt="git"/>
              <Image className={styles.skillsProyectoimg} src={api} alt="api"/>
              <Image className={styles.skillsProyectoimg} src={react} alt="react"/>
              <Image className={styles.skillsProyectoimg} src={github} alt="github"/>
          </div>
      </div>
      
      {/* proyecto numero cuatro */}
      
    </section>
    </>
  );
};

export default Profile;