import React from 'react'
import styles from './index.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <nav>
          <div className={styles.items}>
            <a href="#">Logo</a>
          </div>
          <ul className={styles.items}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Proyects</a>
            </li>
            <li>
              <a href="#">Contact</a>
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