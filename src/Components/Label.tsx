import React from 'react'
import styles from './Label.module.css'
import colors from '../data/techColors'

interface Props {
  text: string,
}

export function Label(props: Props) {
  const {text} = props

  return(
    <span className={styles.label} style={{backgroundColor: colors.get(text)}}>
      {text}
    </span>
  )
}