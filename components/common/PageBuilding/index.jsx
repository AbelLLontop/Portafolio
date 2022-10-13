import React from 'react'
import { FaHammer } from 'react-icons/fa'
import styles from './index.module.scss'

const PageBuilding = () => {
  return (
    <section className={styles.pageBuilding}>
      <main className={styles.message}>
      <FaHammer/>
      <h2>Building Page</h2>
      </main>

  </section>
  )
}

export default PageBuilding