import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>SUFYAN</p>

      <div className={styles.footerSocial}>
        <a
          href="https://www.facebook.com"
          target="_blank" rel="noopener noreferrer"
          className={styles.footerIcon} title="Facebook"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-sufyan-12b725267"
          target="_blank" rel="noopener noreferrer"
          className={styles.footerIcon} title="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/M-Sufyan003"
          className={styles.footerIcon} 
          title="GitHub"
        >
          <BsGithub />
        </a>
      </div>

      <p className={styles.footerCopy}>
        <a href="#">&#169;MS-Solutions.</a> All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
