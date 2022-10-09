import React from "react";
import { BsGithub } from "react-icons/bs";
import styles from '../index.module.scss';
const IconoGithub = () => {
  return (
    <a
    style={{
        fontSize: "1.2rem",
        color:"rgb(255, 255, 255)"
    }}
      href="https://github.com/AbelLLontop"
      className={`${styles.btn} ${styles.icono}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsGithub />
    </a>
  );
};

export default IconoGithub;
