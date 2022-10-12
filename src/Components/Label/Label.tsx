import React from 'react'
import styles from './Label.module.css'

interface Props {
  as?: any,
  color?: string,
  text: string,
}

export function Label(props: Props) {
  const {as: Component = 'span', color, text} = props

  return(
    <Component className={styles.label} style={{backgroundColor: color}}>
      {text}
    </Component>
  )
}