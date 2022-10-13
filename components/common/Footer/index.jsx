import styles from "./index.module.scss";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className={styles.footer}> 
      <div className={styles.container}>
        <div>
        <div className={styles.socialNetwork}>
        <div className={styles.socialNetworkItem} ><BsLinkedin/></div>
        <div className={styles.socialNetworkItem} ><BsGithub/></div>
        <div className={styles.socialNetworkItem} ><FaFacebook/></div>
        <div className={styles.socialNetworkItem} ><ImInstagram/></div>
        <div className={styles.socialNetworkItem} ><BsTwitter/></div>
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
