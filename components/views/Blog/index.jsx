import React from "react";
import styles from "./index.module.scss";
import HeaderSection from "./sections/HeaderSection";
import HeadLayout from "components/common/Layouts/HeadLayout";

const Blog = () => {
  return (
    <HeadLayout title="Portafolio | Blog">
    <div className={styles.app}>
      <div className={styles.container}>
        <main className={styles.main}>
          <HeaderSection />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
    </HeadLayout>
  );
};

export default Blog;
