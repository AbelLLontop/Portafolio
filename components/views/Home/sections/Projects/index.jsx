import React from "react";
import styles from "./index.module.scss";
import { projectList } from "consts/projects";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Proyectos</h2>
        <p className={styles.description}>Algunos de mis proyectos personales</p>
      </header>
      <section className={styles.projects}>
        {projectList.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </section>
  );
};

export default ProjectsSection;
