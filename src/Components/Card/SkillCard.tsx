import React from 'react'
import {Label} from '../Label/Label'
import {type as typeColor} from '../../data/techColors'
import styles from './Card.module.css'

interface SkillProps {
	title: string,
	info: string,
	type: string,
}

export function SkillCard(props: SkillProps){
	return(
		<div className={styles.skillsCard}>
		 <div className={styles.skillsHeader}>
			<h4>{props.title}</h4>
			<Label text={props.type} color={typeColor.get(props.type)} />
		 </div>
		 <span className={styles.skillsDescription}>{props.info}</span>
		</div>
	);
}
