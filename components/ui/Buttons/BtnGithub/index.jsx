import React from "react";
import { BsGithub } from "react-icons/bs";
import styles from '../index.module.scss';
const BtnGithub = () => {
  return (
    <a
    style={{
        backgroundColor: "white",
        color:"rgb(17, 17, 17)"
    }}
      href="https://github.com/AbelLLontop"
      className={styles.btn}
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsGithub />
      Github
    </a>
  );
};

export default BtnGithub;
