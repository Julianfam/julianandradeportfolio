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

import projectimg1 from '../assets/img/pexelsalenadarmel7862509Small.jpg'



const Profile = () => {




  return (
    <>
    <section>

    {/* Profile Card */}
      <div className={styles.contenedorPerfil}>
          <div className={styles.perfilNombre}>JULIAN ANDRADE </div>
          <div className={styles.PerfilFoto}>
            <Image className={styles.PerfilFotoImg}src={imgperfil}></Image>
          </div>
          <div className={styles.PerfilProfesion}>FRONTEND DEVELOPER</div>
      </div>  




    {/* Skill Card */}  
      <setion className={styles.contenedorHabilidades}>
          <div className={styles.Titulo}>Tech Skills</div>
          <div className={styles.habilidadesPersonales}>
                <div className={styles.skills}><Image className={styles.skillsimg} src={html} alt="Html"/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={css} z/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={node}/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={js}/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={react}/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={api}/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={git} width={30} height={30} /></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={github}/></div>
                <div className={styles.skills}><Image className={styles.skillsimg} src={vercel} width={30} height={30} /></div>
          </div>
      </setion>

      {/* Proyect Card */}
  <div className={styles.Titulo}>Proyects</div>
      {/* proyecto numero uno  */}


      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}></Image></div>
            <div className={styles.proyectoTitulo}>E-commerce Shopping cart</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html}/>
              <Image className={styles.skillsProyectoimg} src={css}/>
              <Image className={styles.skillsProyectoimg} src={api}/>
              <Image className={styles.skillsProyectoimg} src={react}/>
              <Image className={styles.skillsProyectoimg} src={github}/>
          </div>
      </div>
      
      {/* proyecto numero dos */}
      
      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}></Image></div>
            <div className={styles.proyectoTitulo}>Buisness Landing Page</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html}/>
              <Image className={styles.skillsProyectoimg} src={css}/>
          </div>
      </div>
      
      {/* proyecto numero tres */}
      <div className={styles.contenedorProyectos}>
          
            <div className={styles.proyectoImg}><Image src={projectimg1}></Image></div>
            <div className={styles.proyectoTitulo}>Personal Buisness Card</div>
              <div className={styles.proyectoDescripcion}>Esto es un texto random sobre el presente proyecto,    
                         la    idea es que esta imagen tenga un slider de imgs del proyecto            
                                   info</div>
          <div className={styles.skillsProyectos}>
              <Image className={styles.skillsProyectoimg} src={html}/>
              <Image className={styles.skillsProyectoimg} src={css}/>
              <Image className={styles.skillsProyectoimg} src={vercel} width={30} height={30} />
              <Image className={styles.skillsProyectoimg} src={git} width={30} height={30} />
              <Image className={styles.skillsProyectoimg} src={api}/>
              <Image className={styles.skillsProyectoimg} src={react}/>
              <Image className={styles.skillsProyectoimg} src={github}/>
          </div>
      </div>
      
      {/* proyecto numero cuatro */}
      
    </section>
    </>
  )
}

export default Profile