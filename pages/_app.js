import Footer from "components/common/Footer";
import NavBar from "components/common/NavBar";
import { useEffect } from "react";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
