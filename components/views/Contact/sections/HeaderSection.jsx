import React from 'react'
import BtnLinkedin from '../../../ui/Buttons/BtnLinkedin';
import styles from './HeaderSection.module.scss';

const HeaderSection = () => {
  return (
    <section className={styles.headerSection}>
      <header>
        <h2>Contact</h2>
        <p>Por aqui nos contactamos</p>
      </header> 
      <div className={styles.buttons}>
         <BtnLinkedin/>
        </div>

    </section>
  )
}

export default HeaderSection