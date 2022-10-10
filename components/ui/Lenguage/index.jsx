import React from "react";
import styles from './index.module.scss';
const Lenguage = ({icon,name}) => {
  return (
    <article className={styles.lenguage} 
    >
      <div className={styles.icon}>
      {icon}
      </div>
      <div className={styles.data}>
      <span
      className={styles.text}>{name}</span>
      <span className={styles.nivel}>Intemedio</span>
      </div>
    </article>
  );
};

export default Lenguage;
