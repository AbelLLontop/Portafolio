import Image from "next/image";
import React from "react";
import BtnGithub from "components/ui/Buttons/BtnGithub";
import BtnLinkedin from "components/ui/Buttons/BtnLinkedin";
import MouseScroll from "components/ui/MouseScroll";
import styles from "./index.module.scss";
import { presentation } from "consts/presentation";
import HeaderAnimation from "components/ui/HeaderAnimation";
const PresentationSection = () => {
  return (
    <div className={styles.container}>
      <HeaderAnimation/>  
    <section className={styles.headerSection}>
      <article className={styles.profileHeader}>
        <div className={styles.logoPeru}>
          <span></span> 
          <span></span>
          <span></span>
        </div>
        <h1>{presentation.title}</h1>

        <p className={styles.skills}>{presentation.subtitle}</p>
        <p className={styles.description}>
          {presentation.description}
        </p>
        <div className={styles.buttons}>
         <BtnGithub/>
         <BtnLinkedin/>
        </div>
      </article>
      <article className={styles.profileDecoration}>
        <div className={styles.photoContent}>
          <Image
            className={styles.photo}
            src={presentation.image}
            alt="Picture of the author"
            width={400}
            height={400}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </article>

      <MouseScroll />
    </section>
    </div>
  );
};

export default PresentationSection;
