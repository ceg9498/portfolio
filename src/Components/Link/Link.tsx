import classNames from 'classnames'
import React from 'react'
import styles from './Link.module.scss'

interface Props {
	href: string,
	mode?: 'light' | 'dark',
	children: any,
}

export function Link(props: Props) {
	const {href, mode = 'light', children} = props;
	return(
		<a
			className={classNames(styles.link, styles[mode])}
			href={href}
			target="_blank" rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}
