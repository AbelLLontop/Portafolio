import React, {useState } from "react";
import styles from "./index.module.scss";
import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsChatSquareTextFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import IconoGithub from "../../ui/Buttons/BtnGithub/IconoGithub";
import IconoLinkedin from "../../ui/Buttons/BtnLinkedin/IconoLinkedin";
import { ImMenu } from "react-icons/im";


const NavBar = () => {
  const {pathname} = useRouter();
  const [menu, setStateMenu] = useState(false);

  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a></a>
          </Link>
        </div>
        <ul className={`${styles.list_links} ${!menu ? styles.hidden : ""}`}>
      
          <li>
            <Link href="/" >
              <a onClick={()=>setStateMenu(false)}  className={pathname == "/" ? styles.active : ""}>
                Home
                <span>
                  <AiFillHome />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a onClick={()=>setStateMenu(false)}
                className={pathname == "/projects" ? styles.active : ""}
              >
                Proyects
                <span>
                  <AiOutlineFundProjectionScreen />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a  onClick={() => setStateMenu(false)}  className={pathname == "/blog" ? styles.active : ""}>
                Blog
                <span>
                  <BsChatSquareTextFill />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a  onClick={() => setStateMenu(false)}  className={pathname == "/contact" ? styles.active : ""}>
                Contact
                <span>
                  <RiContactsFill />
                </span>
              </a>
            </Link>
          </li>
          <li onClick={() => setStateMenu(false)} className={styles.btn_cerrar}>X</li>
        </ul>
       
        <ul className={styles.list_icons}>
       
          <li>
            <IconoLinkedin />
          </li>
          <li>
            <IconoGithub />
          </li>
          <li onClick={() => setStateMenu(!menu)} className={styles.iconMenu}>
            <ImMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
