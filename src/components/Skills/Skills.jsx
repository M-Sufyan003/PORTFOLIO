import React, { useState } from 'react';
import styles from './Skills.module.scss';
import { skills } from '../../data/portfolioData';
import { SiReact, SiSqlite, SiCplusplus, SiOpenjdk, SiBootstrap } from 'react-icons/si';

const iconMap = {
  reactjs: <SiReact />,
  sql: <SiSqlite />,
  cpp: <SiCplusplus />,
  java: <SiOpenjdk />,
  bootstrap: <SiBootstrap />
};

const Skills = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className={`${styles.container} bd-grid`}>
        <div>
          <h2 className={styles.subtitle}>Professional Skills</h2>
          {skills.map(skill => (
            <div key={skill.name} className={styles.data}>
              <div className={styles.names}>
                <span className={styles.icon}>{iconMap[skill.class]}</span>
                <span>{skill.name}</span>
              </div>
              <div className={`${styles.bar} ${styles[skill.class]}`} style={{width: skill.level}}></div>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
        <div className={styles.imgDiv}>
          <img 
            src="/assets/img/certificate.jpeg" 
            className={isFull ? styles.full : ''} 
            onClick={() => setIsFull(!isFull)}
            alt="Certificate"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;