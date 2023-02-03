import React from 'react';
import styles from '../styles/ProfileContainer.module.scss';
import Image from 'next/image';
import imgperfil from '../assets/img/IMG_1470_0038LOW.png';

const ProfileContainer = () => {
  return (
    <div className={styles.contenedorPerfil}>
        <div className={styles.greetings}>
            <div className={styles.perfilNombre}><h1>Hola soy <br/> JULIAN ANDRADE </h1></div>
                <br />
                    <div className={styles.PerfilProfesion}><h3>Diseño a través de la programación</h3></div>

                    </div>
                <div className={styles.PerfilFoto}>
            <Image className={styles.PerfilFotoImg}src={imgperfil}alt="profileimage"></Image>
        </div>
      
  </div>  
  );
};

export default ProfileContainer;