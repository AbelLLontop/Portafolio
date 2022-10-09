import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import styles from '../index.module.scss';

const BtnLinkedin = () => {
  return (
    <a
    style={{
        backgroundColor: "#0e76a8",
        color:"white"
    }}
    href="https://www.linkedin.com/in/abelllontopmeza/"
    target="_blank"
    rel="noreferrer noopener"
    className={styles.btn}
  >
    <BsLinkedin />
    Linkedin
  </a>
  )
}

export default BtnLinkedin