import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className={`${styles.container} bd-grid`}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="mail" placeholder="Email" className={styles.input} />
          <textarea name="" id="" cols="0" rows="10" placeholder="Message" className={styles.input}></textarea>
          <input type="button" value="Send" className={`${styles.button} button`} />
        </form>
      </div>
    </section>
  );
};

export default Contact;