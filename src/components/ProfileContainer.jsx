import React from 'react';
import styles from '../styles/ProfileContainer.module.scss';

const ProfileContainer = () => {
  return (
    <div className={styles.contenedorPerfil}>
        <div className={styles.greetings}>
            <div className={styles.perfilNombre}><h1>HOLA Soy JULIAN ANDRADE </h1></div>
                <br />
                    <div className={styles.PerfilProfesion}><h3>Diseñando a traves de la programación</h3></div>

                    </div>
                <div className={styles.PerfilFoto}>
            <Image className={styles.PerfilFotoImg}src={imgperfil}alt="profileimage"></Image>
        </div>
      
  </div>  
  )
}

export default ProfileContainer;