import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Sufyan</p>
      <div className={styles.social}>
        <a href="#" className={styles.icon}><FaFacebook /></a>
        <a href="#" className={styles.icon}><FaInstagram /></a>
        <a href="#" className={styles.icon}><FaTwitter /></a>
      </div>
      <p className={styles.copy}>&#169; {new Date().getFullYear()} all rights reserved</p>
    </footer>
  );
};

export default Footer;