import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import styles from '../index.module.scss';

const IconoLinkedin = () => {
  return (
    <a
    style={{
        fontSize: "1.2rem",
        color:"white"
    }}
    href="https://www.linkedin.com/in/abelllontopmeza/"
    target="_blank"
    rel="noreferrer noopener"
    className={`${styles.btn} ${styles.icono}`}
  >
    <BsLinkedin />
  </a>
  )
}

export default IconoLinkedin