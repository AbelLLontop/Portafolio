import React from "react";
import CircleDecorator from "../../../ui/CircleDecorator";
import styles,{color_start,color_end} from "./SkillSection.module.scss";
import { DiJavascript1, DiPhp, DiJava, DiPython ,DiMysql,DiMongodb,DiPostgresql} from "react-icons/di";
import { SiTypescript, SiKotlin } from "react-icons/si";
import Lenguage from "../../../ui/Lenguage";

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <CircleDecorator number={1} title="Skills" colorLeft={color_start} colorEnd={color_end} />
      <header>
        <h2  className={styles.title}>Programming Languages</h2>
        <p className={styles.description}>Algunos de los lenguajes aplicados para el <span>desarrollo web</span>  y <span>desarrollo mobil</span></p>
      </header>
      <section className={styles.skills}>
        <Lenguage icon={<SiTypescript />} name="Typescript" />
        <Lenguage icon={<DiJavascript1 />} name="Javascript"  />
        <Lenguage icon={<DiPhp />} name="Php" />
        <Lenguage icon={<DiPython />} name="Python" />
        <Lenguage icon={<DiJava />} name="Java"  />
        <Lenguage icon={<SiKotlin />} name="Kotlin" />
      </section>
    
          <header>
        <h2   className={styles.title}>DataBase</h2>
        <p className={styles.description}>Manejo de algunas bases de datos relacionales y no relacionales</p>
      </header>
      <section className={styles.skills}>
        <Lenguage icon={<DiMysql />} name="Mysql"/>
        <Lenguage icon={<DiMongodb />} name="Mongodb" />
        <Lenguage icon={<DiPostgresql />} name="Postgress" />
      </section>
      
    </section>
  );
};

export default SkillsSection;
