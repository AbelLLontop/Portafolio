import Image from "next/image";
import React from "react";
import BtnGithub from "components/ui/Buttons/BtnGithub";
import BtnLinkedin from "components/ui/Buttons/BtnLinkedin";
import MouseScroll from "components/ui/MouseScroll";
import styles from "./index.module.scss";
import { presentation } from "consts/presentation";
import HeaderAnimation from "components/ui/HeaderAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
const PresentationSection = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);

  return (
    <div className={styles.container}>
        <a href="#footer">FOOOOTER</a>
      <HeaderAnimation />
      <section className={styles.headerSection}>
        <motion.article
          animate={{ x: [-150, 50, 0] }}
          transition={{ duration: 1 }}
          className={styles.profileHeader}
        >
          <div className={styles.logoPeru}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>{presentation.title}</h1>

          <p className={styles.skills}>{presentation.subtitle}</p>
          <p className={styles.description}>{presentation.description}</p>
          <div className={styles.buttons}>
            <BtnGithub />
            <BtnLinkedin />
          </div>
        </motion.article>
        <article className={styles.profileDecoration}>
        <motion.div
            animate={{ y: [-150,50, 0] }}
            transition={{ duration: 1 }}
            style={{ y:y1 }}
          
          className={styles.photoContent}>
            <Image
              className={styles.photo}
              src={presentation.image}
              alt="Picture of the author"
              width={400}
              height={400}
              style={{ borderRadius: "50%" }}
            />
          </motion.div>
        </article>

        <MouseScroll />
      </section>
    </div>
  );
};

export default PresentationSection;
