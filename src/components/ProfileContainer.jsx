import React from 'react';
import styles from '../styles/ProfileContainer.module.scss';
import Image from 'next/image';
import imgperfil from '../assets/img/IMG_1470_0038LOW.png';
import { useState , useEffect } from 'react';


const ProfileContainer = () => {
    const [wordIndex, setWordIndex] = useState(0);
  const words = ["React", "JavaScript", "Next.js", "CSS", "HTML"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex + 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [wordIndex]);

  return (
    <div className={styles.contenedorPerfil}>
        <div className={styles.greetings}>
            <div className={styles.perfilNombre}><h1>Hi im <br/> JULIAN ANDRADE </h1></div>
                <br />
                    <div className={styles.PerfilProfesion}><h3>designing through programming
                        <br /><br />
                        <div className={styles.text}>{words[wordIndex]} Programmer</div>
                        </h3></div>

                    </div>
                <div className={styles.PerfilFoto}>
            <Image className={styles.PerfilFotoImg}src={imgperfil}alt="profileimage"></Image>
        </div>
      
  </div>  
  );
};

export default ProfileContainer;