import Head from "next/head";
import React from "react";
import styles from "./index.module.scss";
import HeaderSection from "./sections/HeaderSection";

const Blog = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Head>
          <title>Portafolio | Blog</title>
          <meta name="description" content="Web and mobile developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <HeaderSection />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default Blog;
