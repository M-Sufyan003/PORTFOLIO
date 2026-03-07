import React, { useEffect, useRef, useState } from "react";
import skillsData from "../../data/skillsData";
import styles from "./Skills.module.css";

const SkillBar = ({ skill, animate }) => {
  const Icon = skill.icon;
  return (
    <div className={styles.skillsData}>
      <div className={styles.skillsNames}>
        <span className={styles.skillsIcon}><Icon /></span>
        <span className={styles.skillsName}>{skill.name}</span>
      </div>
      <div className={styles.skillsBarTrack}>
        <div
          className={styles.skillsBarFill}
          style={{
            width: animate ? `${skill.percentage}%` : "0%",
            transitionDelay: `${skill.id * 0.1}s`,
          }}
        />
      </div>
      <div>
        <span className={styles.skillsPercentage}>{skill.percentage}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.skills} section`} id="skills" ref={sectionRef}>
      <h2 className="section-title">Skills</h2>

      <div className={`${styles.skillsContainer} bd-grid`}>

        <div>
          <h2 className={styles.skillsSubtitle}>Professional Skills</h2>
          <p className={styles.skillsText}>
            These are a bunch of Programming Skills which I acquired with the passage of time.
          </p>

          {skillsData.map((skill) => (
            <SkillBar key={skill.id} skill={skill} animate={animate} />
          ))}
        </div>

        <div className={styles.skillsImgDiv}>

          <img
            src="/img/certificate.jpeg"
            alt="Certificate of Web Designing"
            className={styles.skillsImg}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;
