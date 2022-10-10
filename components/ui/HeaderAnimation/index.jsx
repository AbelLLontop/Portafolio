import React from "react";
import styles from "./index.module.scss";

const HeaderAnimation = () => {
  return (
    <div className={styles.circulos}>
      <div className={styles.circulo2}></div>
      <div className={styles.circulo3}></div>

      <div className={styles.circles}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default HeaderAnimation;
