import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>

      <div className={`${styles.aboutContainer} bd-grid`}>
        <div className={styles.aboutImg}>
          <img src="/assets/img/about.jpg" alt="About Me" />
        </div>

        <div>
          <h2 className={styles.aboutSubtitle}>I am Sufyan</h2>
          <p className={styles.aboutText}>
            Passionate Web Developer with a focus on creating functional, 
            responsive, and user-friendly websites. I enjoy solving complex 
            problems and turning ideas into digital reality using modern 
            technologies like React, SCSS, and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;