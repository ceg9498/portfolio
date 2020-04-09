import React from 'react'
import articles from '../../data/articles.json'
import {articleImages} from './images'
import {ArticleCard as Card} from '../Card/index'
import styles from './Projects.module.scss'

export function ArticleDeck() {
  return(
    <div className={styles.projFlex}>
      {articles.map(item => {
        item.image = articleImages[item.image]
        return (<Card key={item.title} {...item} />)
      })}
      
    </div>
  )
}