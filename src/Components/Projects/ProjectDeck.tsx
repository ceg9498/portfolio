import React from 'react'
import projects from '../../data/projects.json'
import {ProjectCard as Card} from '../Card/index'
import {projectImages} from './images'
import styles from './Projects.module.scss'

export function ProjectDeck() {
  return(
    <div className={styles.projFlex}>
      {projects.map(item => {
        item.image = projectImages[item.image]
        return (<Card key={item.title} {...item} />)
      })}
    </div>
  )
}