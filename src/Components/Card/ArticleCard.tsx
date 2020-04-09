import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.css'

interface ArticleProps {
	image: string,
	title: string,
	link: string,
	description: string,
}

export function ArticleCard(props: ArticleProps) {
	return(
		<div className={styles.projectCard}
			tabIndex={1}
			style={{backgroundImage: `url('${props.image}')`}}
		>
			<Info details={props} />
		</div>
	);
}

function Info(props: {details: ArticleProps}) {
	const {details} = props
	return(
		<div className={styles.projectInfo}>
			<h3 className={styles.projectTitle}>{details.title}</h3>
			<span className={styles.projectDescription}>{details.description}</span>
			<a href={details.link} className={styles.linkIcon} title="Read article">
				<FontAwesomeIcon icon={faBookOpen} />
			</a>
		</div>
	);
}
