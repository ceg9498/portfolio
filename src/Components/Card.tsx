import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons'
import {Label} from './Label'
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

interface SkillProps {
	title: string,
	color: string,
	info: string,
}

export function SkillCard(props: SkillProps){
	return(
		<div className={styles.skillsCard}>
		 <div className={styles.skillsHeader}>
			<h4>{props.title}</h4>
			<Label as="button" text="projects" color={props.color} />
		 </div>
		 <span className={styles.skillsDescription}>{props.info}</span>
		</div>
	);
 }

export class ProjectCard extends React.PureComponent<ProjectProps> {
	render(){
		const project = this.props
		return(
			<div className={styles.projectCard}
				tabIndex={1}
				style={{backgroundImage: `url('${project.image}')`}}
			>
			<Info details={project} />
			</div>
		);
	}
}

function Info(props: {details: ProjectProps}){
	const { details } = props;
	return(
		<div className={styles.projectInfo}>
		 <h3 className={styles.projectTitle}>{details.title}</h3>
		 <div className={styles.tech}>
			 {details.tech.map((tech)=>
				 <Label text={tech} />
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
