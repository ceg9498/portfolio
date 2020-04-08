import React from 'react'
import projects from '../data/projects.json'
import {ProjectCard as Card} from './Card'
import styles from './Project.module.scss'

import pomoImage from '../Images/pomodoroTimer.png'
import quoteImage from '../Images/quoteMachine.png'
import mdPrevImage from '../Images/markdownPreviewer.png'
import jsCalcImage from '../Images/jsCalculator.png'
import techDocPageImage from '../Images/techDocPage.png'
import translationImage from '../Images/translationPractice.png'
import todoTimers from '../Images/todoTimers.png'
import challenge10for20 from '../Images/10for20challenge.png'
import kurikaTasks from '../Images/kurikaTasks.png'

const images = {
  pomoImage,
  quoteImage,
  mdPrevImage,
  jsCalcImage,
  techDocPageImage,
  translationImage,
  todoTimers,
  challenge10for20,
  kurikaTasks,
}

export class ProjectSection extends React.Component<any,any>{
  render(){
    return(
      <section id="projects" className={styles.projects}>
        <h2 className="hidden">Projects</h2>
        <div className={styles.projFlex}>
          {projects.map(item => {
            item.image = images[item.image]
            return (<Card key={item.title} {...item} />)
          })}
        </div>
      </section>
    );
  }
}