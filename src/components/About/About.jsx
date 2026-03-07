import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.about} section`} id="about">
      <h2 className="section-title">About</h2>

      <div className={`${styles.aboutContainer} bd-grid`}>

        <div className={styles.aboutImgWrapper}>
          {/* Replace src with your actual image: /img/sufyan.jpeg in /public */}
          <img src="/img/sufyan.jpeg" alt="Sufyan" className={styles.aboutImg}
            onError={(e) => { e.target.style.display = "none"; }} />
          <div className={styles.aboutImgFallback}>
            <svg viewBox="0 0 200 200" width="140">
              <circle cx="100" cy="70" r="45" fill="hsl(224, 89%, 60%)" />
              <path d="M20 190 Q20 120 100 120 Q180 120 180 190 Z" fill="hsl(224, 89%, 60%)" />
            </svg>
          </div>
        </div>

        <div>
          <h2 className={styles.aboutSubtitle}>I'm SUFYAN</h2>
          <p className={styles.aboutText}>
            A driven and enthusiastic student pursuing my career currently in Web
            development. With a solid foundation in HTML5, CSS3, Javascript,
            Bootstrap, Tailwind CSS, JQuery and ReactJS.
            <br /><br />
            As a rare designer-developer hybrid, I understand both the visual,
            experiential, and functional aspects of creation for the web. My
            mission is to bring more Beauty, Creativity, Great Ideas, and
            possibility with insane logic into the world of Software Development.
            <br /><br />
            I am Graduate of <b>BS-IT</b> with a CGPA of &nbsp;
            <b>3.20</b>. I also have experience in other Backend Languages such as:<br />
            Java, C, C++, SQL, PHP and Laravel.
            <br /><br />
            I am excited to apply my skills and knowledge to Real-World projects
            as an Enthusiastic Web Developer and Junior Software Engineer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
