import React from 'react';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
    
  return (
    <section className={styles.formulario}>
    <form action="mailto:julifeli123@gmail.com" method="post" enctype="text/plain" onsubmit="return sendForm()">
    <label htmlFor="name">Name:</label><br/>
    <input type="text" id="name" name="name"/><br/>
    <label htmlFor="number">Phone Number:</label><br/>
    <input type="text" id="number" name="number"/><br/>
    <label htmlFor="mail">E-mail:</label><br/>
    <input type="text" id="mail" name="mail"/><br/><br/>
    <input type="submit" value="Enviar" id="submit-button"/>
  </form>
  </section>
  );
};

export default Contact;