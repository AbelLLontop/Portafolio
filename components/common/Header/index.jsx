import React from 'react';
import styles from './index.module.scss';
import {AiFillHome,AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsChatSquareTextFill} from 'react-icons/bs';
import {RiContactsFill} from 'react-icons/ri';
const Header = () => {
  

  return (
    <header className={styles.header}>
        <nav>
          <div className={styles.items}>
            <a href="#">Logo</a>
          </div>
          <ul className={`${styles.items} ${styles.links}`}>
            <li>
             
              <a className={styles.select} href="#"> Home<span><AiFillHome/></span></a>
            </li>
            <li>
              <a href="#">Proyects<span><AiOutlineFundProjectionScreen/></span></a>
            </li>
            <li>
              <a href="#">Blog<span><BsChatSquareTextFill/></span></a>
            </li>
            <li>
              <a href="#">Contact<span><RiContactsFill/></span></a>
            </li>
          </ul>

          <ul className={styles.items}>
            <li>
              <a href="#">😎</a>
            </li>
            <li>
              <a href="#">😛</a>
            </li>
            <li>
              <a href="#">🧐</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header