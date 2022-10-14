import styles from "./index.module.scss";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className={styles.footer} id="footer"> 
      <div className={styles.container}>
        <div>
        <div className={styles.socialNetwork}>
        <div className={styles.socialNetworkItem} ><a href="https://www.linkedin.com/in/abelllontopmeza/"   target="_blank"
    rel="noreferrer noopener"><BsLinkedin/></a></div>
        <div className={styles.socialNetworkItem} ><a href="https://github.com/AbelLLontop"   target="_blank"
    rel="noreferrer noopener"><BsGithub/></a></div>
        <div className={styles.socialNetworkItem} ><a href="https://www.facebook.com/A.LlontopMeza"   target="_blank"
    rel="noreferrer noopener"><FaFacebook/></a></div>
        <div className={styles.socialNetworkItem} ><a href="https://www.instagram.com/abel_llontop_meza"   target="_blank"
    rel="noreferrer noopener"><ImInstagram/></a></div>
        </div>
        <header className={styles.header}>
          <span>Portafolio web de</span>
          <h4 className={styles.title}>Abel Llontop Meza</h4>
        </header>
      
      </div>
      </div>
    </div>
  );
};

export default Footer;
