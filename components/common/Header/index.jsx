import React from 'react';
import styles from './index.module.scss';
import {AiFillHome,AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsChatSquareTextFill} from 'react-icons/bs';
import {RiContactsFill} from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
        <nav>
          <div className={styles.items}>
            <Link href="/">
            <a  >Logo</a>
            </Link>
          </div>
          <ul className={`${styles.items} ${styles.links}`}>
            <li>
             <Link href="/" re>
              <a  className={router.pathname=="/"?styles.select:''}> Home<span><AiFillHome/></span></a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
              <a className={router.pathname=="/projects"?styles.select:''}>Proyects<span><AiOutlineFundProjectionScreen/></span></a>
              </Link>
            </li>
            <li>
            
              <Link href="/blog">
              <a  className={router.pathname=="/blog"?styles.select:''}>Blog<span><BsChatSquareTextFill/></span></a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
              <a  className={router.pathname=="/contact"?styles.select:''}>Contact<span><RiContactsFill/></span></a>
              </Link>
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