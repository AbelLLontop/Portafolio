import Image from "next/image";
import React from "react";
import CircleDecorator from "../../../ui/CircleDecorator";
import styles, {
  color_start,
  color_end,
} from "./ExperiencesSection.module.scss";



const Experience = ()=>(
<div className={styles.experienceContent}>
        <article className={styles.experience}>
          <header>
            <div>
              <h3 className={styles.subtitle}>Consigue Ventas</h3>
              <p>Frontend Developer</p>
            </div>
            <img width={400} height={400}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQGuMJ5PFVXWaA/company-logo_200_200/0/1657640541027?e=1672272000&v=beta&t=y8ncOQ_Fu_oYbB4aHhe5ZN88_ECinhIFK1eOszP0XcA"
              alt=""
            />
          </header>
          <p className={styles.description}>Contrato de practicas</p>
        <footer>
          <span >may. 2022 - ago. 2022 · 4 meses</span>
          <span>Lima, Peru</span>
        </footer>
        </article>
          </div>

)

const ExperiencesSection = () => {
  return (
    <section className={styles.experienceSection}>
      <CircleDecorator
        number={2}
        title="Experiences"
        colorLeft={color_start}
        colorEnd={color_end}
      />
      <header className={styles.header}>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.description}>
          Algunos de los lenguajes aplicados para el <span>desarrollo web</span>{" "}
          y <span>desarrollo mobil</span>
        </p>
      </header>
      <section className={styles.experiences}>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        
      </section>
    </section>
  );
};

export default ExperiencesSection;
