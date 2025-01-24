import React from 'react'
import styles from './Footer.module.scss'
import {Link} from '../Link/Link'

export function Footer(){
  return(
    <footer id="contact" className={styles.contact}>
      <h2 className="hidden">Contact</h2>
      <span className={styles.header}>Ready to say hi?</span>
      <p className={styles.content}>Contact me on <Link href="https://github.com/ceg9498">Github</Link> or <Link href="https://linkedin.com/in/ceg9498">LinkedIn</Link>!</p>
    </footer>
  )
}