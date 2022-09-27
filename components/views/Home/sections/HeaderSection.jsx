import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import image from "../../../../public/images/perfilLinkedin.jpg";
import MouseScroll from "../../../ui/MouseScroll";
import styles from "./HeaderSection.module.scss";
const HeaderSection = () => {
  return (
    <section className={styles.headerSection}>
      <article className={styles.profileHeader}>
        <div className={styles.logoPeru}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1>Abelitolll Dev</h1>

        <p>Frontend Developer | Mobile Developer</p>
        <p className={styles.description}>
          💻👨‍💻 Entusiasta, autodidacta y cómodo trabajando en equipo, siempre
          dispuesto aprender y desenvolverme de la mejor manera posible en
          nuevas tecnologías. Siempre asumiendo retos que me permitan
          desarrollarme profesionalmente; responsable y comprometido con mi
          deber. 💻Actualmente adentrándome en el mundo del desarrollo android
          con kotlin!!
        </p>
        <div className={styles.buttons}>
          <button className={styles.btn_linkedin}>
            <BsLinkedin />
            Linkedin
          </button>
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
  );
};

export default HeaderSection;
