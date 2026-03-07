import React from "react";
import { FiExternalLink } from "react-icons/fi";
import projectsData from "../../data/projectsData";
import styles from "./Work.module.css";

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    if (project.link) window.open(project.link, "_blank");
  };

  return (
    <div
      className={`${styles.workCard} ${!project.link ? styles.comingSoon : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className={styles.workCardImgWrap}>
        <img
          src={project.image}
          alt={project.imgAlt}
          className={styles.workCardImg}
          loading="lazy"
        />
        <div className={styles.workCardOverlay}>
          <FiExternalLink className={styles.workCardIcon} />
        </div>
      </div>

      <div className={styles.workInfo}>
        <h3 className={styles.workInfoTitle}>{project.title}</h3>
        <p className={styles.workInfoDesc}>{project.description}</p>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section className={`${styles.work} section`} id="work">
      <h2 className="section-title">Projects</h2>

      <div className={styles.workContainer}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
