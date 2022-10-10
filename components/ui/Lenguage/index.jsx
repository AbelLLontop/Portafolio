import React from "react";
import styles from './index.module.scss';
const Lenguage = ({icon,name}) => {
  return (
    <article className={styles.lenguage} 
    >
      {icon}
      <span
      className={styles.text}>{name}</span>
      <span className={styles.nivel}>Intemedio</span>
    </article>
  );
};

export default Lenguage;
