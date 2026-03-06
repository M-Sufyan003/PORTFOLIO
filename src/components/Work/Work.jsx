import React from 'react';
import styles from './Work.module.scss';
import { projects } from '../../data/portfolioData';

const Work = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Projects</h2>
      <div className={`${styles.container} bd-grid`}>
        {projects.map(project => (
          <div key={project.id} className={styles.card} onClick={() => window.open(project.link, '_blank')}>
            <img src={project.img} alt={project.title} />
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;