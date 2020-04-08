import React from 'react'
import styles from './Link.module.scss'

export function Link(props: {href: string, children: any}) {
	const {href, children} = props;
	return(
		<a
			className={styles.link}
			href={href}
			target="_blank" rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}
