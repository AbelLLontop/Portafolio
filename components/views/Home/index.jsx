/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import styles from "./index.module.scss";
import PresentationSection from "./sections/Presentation";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portafolio | Home</title>
        <meta name="description" content="Web and mobile developer" />
        <meta name="viewport" content= "width=device-width, user-scalable=no"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
          <PresentationSection />
          <SkillsSection />
          <ProjectsSection />
        <footer className={styles.footer}></footer>
      </>
    </>
  );
};

export default Home;
