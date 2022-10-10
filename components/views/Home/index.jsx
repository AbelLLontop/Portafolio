/* eslint-disable jsx-a11y/alt-text */
import styles from "./index.module.scss";
import PresentationSection from "./sections/Presentation";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import HeadLayout from "components/common/Layouts/HeadLayout";

const Home = () => {
  return (
    <HeadLayout title="Portafolio | Home">
      <PresentationSection />
      <SkillsSection />
      <ProjectsSection />
      <footer className={styles.footer}></footer>
    </HeadLayout>
  );
};

export default Home;
