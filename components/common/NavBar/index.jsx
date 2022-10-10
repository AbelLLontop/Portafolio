import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import IconoGithub from "components/ui/Buttons/BtnGithub/IconoGithub";
import IconoLinkedin from "components/ui/Buttons/BtnLinkedin/IconoLinkedin";
import { ImMenu } from "react-icons/im";
import styles from "./index.module.scss";
import { menuList } from "consts/menu";

const NavBar = () => {
  const [menu, setStateMenu] = useState(false);
  const { pathname } = useRouter();
  const domHeader = useRef(null)
  const closeMenu = () => {
    setStateMenu(false);
  };
  useEffect(()=>{
    if(menu){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
  },[menu])

  useEffect(()=>{
    const paintNav = ()=>{
      if(window.scrollY > 0){
        domHeader.current.classList.add(styles.showBackground)
      }else{
        domHeader.current.classList.remove(styles.showBackground)
      }
    }
    window.addEventListener("scroll", paintNav);
    return () => window.removeEventListener("scroll", paintNav);
  },[])

  return (
    <header ref={domHeader} className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a></a>
          </Link>
        </div>
        <ul className={`${styles.list_links} ${!menu ? styles.hidden : ""}`}>
          {menuList.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <a
                  onClick={closeMenu}
                  className={pathname === item.href ? styles.active : ""}
                >
                  {item.name}
                  <span>{item.icon}</span>
                </a>
              </Link>
            </li>
          ))}
          <li onClick={closeMenu} className={styles.btn_cerrar}>
            X
          </li>
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
