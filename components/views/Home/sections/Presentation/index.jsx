import Image from "next/image";
import React from "react";
import image from "public/images/perfilLinkedin.jpg";
import BtnGithub from "components/ui/Buttons/BtnGithub";
import BtnLinkedin from "components/ui/Buttons/BtnLinkedin";
import MouseScroll from "components/ui/MouseScroll";
import styles from "./index.module.scss";
const PresentationSection = () => {
  return (
    <div className={styles.container}>
    <section className={styles.headerSection}>
      <article className={styles.profileHeader}>
        <div className={styles.logoPeru}>
          <span></span> 
          <span></span>
          <span></span>
        </div>
        <h1>Abel Llontop</h1>

        <p className={styles.skills}>Frontend Developer | Mobile Developer</p>
        <p className={styles.description}>
          💻👨‍💻 Entusiasta, autodidacta y cómodo trabajando en equipo, siempre
          dispuesto aprender y desenvolverme de la mejor manera posible en
          nuevas tecnologías. Siempre asumiendo retos que me permitan
          desarrollarme profesionalmente; responsable y comprometido con mi
          deber. 💻Actualmente adentrándome en el mundo del desarrollo android
          con kotlin!!
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
            src={image}
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
