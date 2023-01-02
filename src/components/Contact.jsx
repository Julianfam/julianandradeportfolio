import React from 'react';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
    function validateForm() {
        // Get the email field value
        var email = document.getElementById("mail").value;
    
        // Regular expression to check for valid email format
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // Check if the email is a valid format
        if (!emailRegex.test(email)) {
          // If the email is not a valid format, display an error message
          alert("Please enter a valid email address.");
          return false;
        } else {
          return true;
        }
      }
  return (
    <section className={styles.formulario}>
    <form action="mailto:julifeli123@gmail.com" method="post" enctype="text/plain" onsubmit="return sendForm()">
    <label for="name">Name:</label><br/>
    <input type="text" id="name" name="name"/><br/>
    <label for="number">Phone Number:</label><br/>
    <input type="text" id="number" name="number"/><br/>
    <label for="mail">E-mail:</label><br/>
    <input type="text" id="mail" name="mail"/><br/><br/>
    <input type="submit" value="Enviar" id="submit-button"/>
  </form>
  </section>
  )
}

export default Contact