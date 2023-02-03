import React from 'react';
import '@styles/ProyectCardContainer.modules.scss';
import projectunder from  '@img/underConstruction.png';
import projectimg1 from '@img/portafolioProgramaciónWeb-02.jpg';
import projectimg2 from '@img/portafolioProgramaciónWeb-01.jpg';
import projectimg3 from '@img/castellWeb.png';

import html from '@icons/codeicon/005-html-5.png';
import css from '@icons/codeicon/006-css-3.png';
import node from '@icons/codeicon/002-node-js.png';
import js from '@icons/codeicon/001-js.png';
import github from '@icons/codeicon/004-github.png';
import api from '@icons/codeicon/007-api.png';
import react from '@icons/codeicon/003-physics.png';
import vercel from '@icons/codeicon/vercel.png';
import git from '@icons/codeicon/Git_icon.svg.png';

const ProyectCardContainer = () => {
  return (
    <>  <div className={styles.Titulo}>Proyects</div>
    <section className={styles.allproyectcontainer}>
   {/* proyecto Nuevo  */}
 
  
 
       <div className={styles.contenedorProyectos}>
     
       <div className={styles.proyectoImg}><Image src=   {projectunder}alt="imageproyecto"></Image></div>
       <div className={styles.proyectoTitulo}>Gallery Landing Page</div>
         <div className={styles.proyectoDescripcion}>This landing page is image oriented.          
                              info</div>
      <div className={styles.skillsProyectos}>
         <Image className={styles.skillsProyectoimg} src={html} alt="Html"/>
         <Image className={styles.skillsProyectoimg} src={css} alt="Css"/>
         <Image className={styles.skillsProyectoimg} src={api} alt="api"/>
         <Image className={styles.skillsProyectoimg} src={react} alt="react"/>
         <Image className={styles.skillsProyectoimg} src={github} alt="github"/>
     </div>
     <button className ={styles.botoncontacto}> <Link href="https://nextstorejs.vercel.app">Visit me!</Link> </button>
     
 </div>
       {/* proyecto numero uno  */}
 
     
 
       <div className={styles.contenedorProyectos}>
           
             <div className={styles.proyectoImg}><Image src={projectimg1}alt="imageproyecto"></Image></div>
             <div className={styles.proyectoTitulo}>E-commerce Shopping cart</div>
               <div className={styles.proyectoDescripcion}>This ecommerce website design is developed in React and NextJS, and features a functional shopping cart that allows users to easily add and remove products from their cart. The user interface is user-friendly and easy to use, and navigation is intuitive for users to easily find the products they are looking for. Additionally, the page loads quickly and is secure, ensuring a pleasant shopping experience for users.          
                                    info</div>
           <div className={styles.skillsProyectos}>
               <Image className={styles.skillsProyectoimg} src={html} alt="Html"/>
               <Image className={styles.skillsProyectoimg} src={css} alt="Css"/>
               <Image className={styles.skillsProyectoimg} src={api} alt="api"/>
               <Image className={styles.skillsProyectoimg} src={react} alt="react"/>
               <Image className={styles.skillsProyectoimg} src={github} alt="github"/>
           </div>
           <button className ={styles.botoncontacto}> <Link href="https://nextstorejs.vercel.app">Visit me!</Link> </button>
           
       </div>
       
       {/* proyecto numero dos */}
       
       <div className={styles.contenedorProyectos}>
           
             <div className={styles.proyectoImg}><Image src={projectimg2}alt="imageproyecto2"></Image></div>
             <div className={styles.proyectoTitulo}>Buisness Landing Page</div>
               <div className={styles.proyectoDescripcion}> I created a responsive mobile design for a landing page on Batabit. The design ensures that the page looks great and functions properly on a wide range of mobile devices, regardless of screen size or orientation. The layout adjusts seamlessly to fit the user&apos;s device, and all elements of the page, including text, images, and buttons, are easy to interact with on a touch screen. This ensures a seamless and enjoyable user experience for visitors to the page on mobile devices.          
                                    info</div>
           <div className={styles.skillsProyectos}>
               <Image className={styles.skillsProyectoimg} src={html}alt="Html"/>
               <Image className={styles.skillsProyectoimg} src={css}alt="css"/>
           </div>
           <button className ={styles.botoncontacto}> <Link href="https://bata-bit.vercel.app/">Visit me!</Link> </button>
       </div>
       
       {/* proyecto numero tres */}
       <div className={styles.contenedorProyectos}>
           
             <div className={styles.proyectoImg}><Image src={projectimg3}alt="imageproyecto3"></Image></div>
             <div className={styles.proyectoTitulo}>Buisness Landing Page</div>
               <div className={styles.proyectoDescripcion}>
                 Updating Main landig page for a managment company. New Web is Mobile Friendly and More accesible than before<br/><br/>
                 Javascript<br/><br/>
                 React<br/><br/>
                 Vercel<br/><br/>
                 Hooks          
                                   </div>
           <div className={styles.skillsProyectos}>
               <Image className={styles.skillsProyectoimg} src={html} alt="Html"/>
               <Image className={styles.skillsProyectoimg} src={css} alt="css"/>
               <Image className={styles.skillsProyectoimg} src={vercel} width={30} height={30} alt="vercel"/>
               <Image className={styles.skillsProyectoimg} src={git} width={30} height={30} alt="git"/>
               <Image className={styles.skillsProyectoimg} src={api} alt="api"/>
               <Image className={styles.skillsProyectoimg} src={react} alt="react"/>
               <Image className={styles.skillsProyectoimg} src={github} alt="github"/>
           </div>
           <button className ={styles.botoncontacto}> <Link href="https://castell-asesores-web-3vnw.vercel.app/">Visit me!</Link> </button>
       </div>
       
       {/* proyecto numero cuatro */}
      </section>
     </>
  )
}

export default ProyectCardContainer