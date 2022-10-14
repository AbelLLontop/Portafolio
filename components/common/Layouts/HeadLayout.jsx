import Head from "next/head";
import React from "react";
import Footer from "../Footer";

const HeadLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Web and mobile developer" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;
