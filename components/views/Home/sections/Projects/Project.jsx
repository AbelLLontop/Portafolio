import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaMouse } from "react-icons/fa";

import styles from "./project.module.scss";
const Project = ({ project }) => {
  return (
    <article className={styles.project}>
      <div className={styles.imageContent}>
        <Image
          layout="responsive"
          objectFit={project.objectFit?project.objectFit:"cover"}
          width={396}
          height={256}
          src={project.image}
          alt={project.name}
        />
        <span className={styles.date}>{project.date}</span>
        <div className={styles.options}>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.option}
          >
            <BsGithub />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.option}
          >
            <RiExternalLinkFill />
          </a>
        </div>
        <div className={styles.mouse}>
          <FaMouse />
        </div>
      </div>
      <header className={styles.header}>
        <div>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.skills}>
          {project.skills.map((skill) => (
            <div key={skill.name}>{skill.icon}</div>
          ))}
        </div>
      </header>
    </article>
  );
};

export default Project;
