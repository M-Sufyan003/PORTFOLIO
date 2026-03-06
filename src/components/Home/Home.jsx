import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { FaLinkedin, FaFacebook, FaEnvelope, FaGithub } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Web Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${styles.home} bd-grid`} id="home">
      <div className={styles.data}>
        <h1 className={styles.title}>Hi,<br/>I am <span className={styles.color}>Sufyan</span><br/>
          <p className={styles.typing}>{text}</p>
        </h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className={styles.social}>
        <a href="https://linkedin.com..." className={styles.icon}><FaLinkedin /></a>
        <a href="https://facebook.com..." className={styles.icon}><FaFacebook /></a>
        <a href="mailto:..." className={styles.icon}><FaEnvelope /></a>
        <a href="https://github.com..." className={styles.icon}><FaGithub /></a>
      </div>

      <div className={styles.img}>
        <svg className={styles.blob} viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0"><path d="M9.19...z" /></mask>
          <g mask="url(#mask0)">
            <path d="M9.19...z" />
            <image className={styles.blobImg} x="50" y="60" href="/assets/img/sufyan_removed_bgg.png" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Home;