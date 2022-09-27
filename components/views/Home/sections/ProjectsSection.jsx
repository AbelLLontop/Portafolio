import React from 'react'
import CircleDecorator from '../../../ui/CircleDecorator'
import styles from './ProjectsSection.module.scss'

const ProjectsSection = () => {
  return (
    <section className={styles.skillsSection}>
   
      <CircleDecorator number={2} title="Projects" colorLeft='rgb(132, 255, 1)' colorEnd='rgb(0, 198, 3)'  />
     
    <header>
      <h2 className={styles.title}>2022</h2>
      <p>Algunos de los lenguajes que logre aprender</p>
    </header>
   
  </section>
  )
}

export default ProjectsSection