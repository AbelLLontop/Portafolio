import React from "react";
import Lenguage from "components/ui/Lenguage";
import {
  DiJavascript1,
  DiPhp,
  DiJava,
  DiPython,
  DiMysql,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import { SiTypescript, SiKotlin } from "react-icons/si";
import styles, { color_start, color_end } from "./index.module.scss";
import pythonImage from 'public/images/lenguages/python.png';
import typescriptImage from 'public/images/lenguages/typescript.png';
import javascriptImage from 'public/images/lenguages/javascript.png';
import phpImage from 'public/images/lenguages/php.png';
import javaImage from 'public/images/lenguages/java.png';
import kotlinImage from 'public/images/lenguages/kotlin.png';
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section className={styles.container}>
      <header>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.description}>
          Algunos de los lenguajes aplicados para el <span>desarrollo web</span>
          y <span>desarrollo mobil</span>
        </p>
      </header>
      <section className={styles.skills}>
        <Lenguage iconFondo={<SiTypescript/>} icon={ <Image src={typescriptImage} alt="" />} name="Typescript" />
        <Lenguage iconFondo={<DiJavascript1/>} icon={<Image src={javascriptImage} alt=""/>} name="Javascript" />
        <Lenguage iconFondo={<DiPhp/>} icon={<Image src={phpImage} alt=""/>} name="Php" />
        <Lenguage iconFondo={<DiPython/>} icon={ <Image src={pythonImage} alt=""  />} name="Python" />
        <Lenguage iconFondo={<DiJava/>} icon={<Image src={javaImage} alt=""  />} name="Java" />
        <Lenguage iconFondo={<SiKotlin/>} icon={<Image src={kotlinImage} alt=""  />} name="Kotlin" />
      </section>

      <header>
        <p className={styles.description}>
          Manejo de algunas bases de datos relacionales y no relacionales
        </p>
      </header>
      <section className={styles.skills}>
        <Lenguage icon={<DiMysql />} name="Mysql" />
        <Lenguage icon={<DiMongodb />} name="Mongodb" />
        <Lenguage icon={<DiPostgresql />} name="Postgress" />
      </section>
    </section>
  );
};

export default SkillsSection;
