import React from 'react'
import {ArticleDeck} from './ArticleDeck'
import {ProjectDeck} from './ProjectDeck'
import {Link} from '../Link/Link'
import styles from './Projects.module.scss'

export class ProjectSection extends React.Component<any,any>{
  render(){
    return(
      <section id="projects" className={styles.projects}>
        <h2 className="hidden">Projects</h2>
        <ProjectDeck />
        <Footer />
        <h2 className={styles.header}>Articles</h2>
        <ArticleDeck />
      </section>
    );
  }
}

function Footer(){
  return(
    <div className={styles.footer}>
      <span className={styles.header}>Looking for more?</span>
      <p className={styles.content}>The projects listed here are just a sample</p>
      <p className={styles.content}>You can see more projects by visiting my profile on <Link href="https://github.com/ceg9498" mode="dark">Github</Link> or <Link href="https://codepen.io/ceg9498" mode="dark">Codepen</Link>.</p>
    </div>
  )
}
