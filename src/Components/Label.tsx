import React from 'react'
import styles from './Label.module.css'
import colors from '../data/techColors'

interface Props {
  as?: React.ReactType,
  color?: string,
  text: string,
}

export function Label(props: Props) {
  const {as: Component = 'span', color, text} = props
  const background = {backgroundColor: color ? color : colors.get(text)}

  return(
    <Component className={styles.label} style={background}>
      {text}
    </Component>
  )
}