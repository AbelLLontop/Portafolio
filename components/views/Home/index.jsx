/* eslint-disable jsx-a11y/alt-text */
import PresentationSection from "./sections/Presentation";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import HeadLayout from "components/common/Layouts/HeadLayout";


const Home = () => {
  return (
    <HeadLayout title="Portafolio | Home">
        <PresentationSection  />
        <SkillsSection  />
        <ProjectsSection  />
    </HeadLayout>
  );
};

export default Home;
