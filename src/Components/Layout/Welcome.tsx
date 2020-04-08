import React from 'react'
import styles from './Welcome.module.scss'

import profile from '../../Images/photo.jpg'

export function Welcome(){
  return(
    <header id="welcome-section" className={styles.section}>
      <h1 className={styles.grid}>
        <span className={styles.greeting}>Hi!</span>
        <div className={styles.photo} style={{backgroundImage: `url('${profile}')`}}></div>
        <span className={styles.name}>I'm Emily.</span>
        <span className={styles.tagline}>It's nice to meet you.</span>
      </h1>
    </header>
  );
}
