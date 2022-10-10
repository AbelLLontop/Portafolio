import HeadLayout from "components/common/Layouts/HeadLayout";
import React from "react";
import styles from "./index.module.scss";
import HeaderSection from "./sections/HeaderSection";
const Contact = () => {
  return (
    <HeadLayout title="Portafolio | Contact">
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

export default Contact;
