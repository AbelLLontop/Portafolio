/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import styles from "./index.module.scss";
import ExperiencesSection from "./sections/ExperiencesSection";
import HeaderSection from "./sections/HeaderSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";


const Home = () => {



  return (
    <div className={styles.app}>
    <div className={styles.container}>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Web and mobile developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderSection/>
        <SkillsSection/>
        <ExperiencesSection/>
        <ProjectsSection/>
      </main>

<footer className={styles.footer}></footer>
    </div>
    </div>
  );
};

export default Home;
