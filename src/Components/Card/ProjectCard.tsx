import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons'
import {Label} from '../Label/Label'
import {tech as techColor} from '../../data/techColors'
import styles from './Card.module.css'

interface ProjectProps {
	image: string,
	title: string,
	description: string,
	tech: string[],
	view: string,
	codepen: string,
	github: string,
}

export function ProjectCard(props: ProjectProps) {
	return(
		<div className={styles.projectCard}
			tabIndex={1}
			style={{backgroundImage: `url('${props.image}')`}}
		>
			<Info details={props} />
		</div>
	);
}

function Info(props: {details: ProjectProps}){
	const { details } = props;
	return(
		<div className={styles.projectInfo}>
			<h3 className={styles.projectTitle}>{details.title}</h3>
			<div className={styles.tech}>
				{details.tech.map((tech)=>
					<Label text={tech} color={techColor.get(tech)} />
				)}
			</div>
			<span className={styles.projectDescription}>{details.description}</span>
			<Links view={details.view} codepen={details.codepen} github={details.github} />
		</div>
	);
}

function Links(props: {view: string, codepen: string, github: string}) {
	return (
		<div>
			{props.view &&
				<a href={props.view} className={styles.linkIcon} title="View sample">
					<FontAwesomeIcon icon={faGlobe} />
				</a>
			}
			{props.github &&
				<a href={props.github} className={styles.linkIcon} title="View code on Github">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			}
			{props.codepen &&
				<a href={props.codepen} className={styles.linkIcon} title="View sample &amp; code on Codepen">
					<FontAwesomeIcon icon={faCodepen} />
				</a>
			}
		</div>
	)
}
