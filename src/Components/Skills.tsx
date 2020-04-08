import React from 'react'
import {SkillCard as Card} from './Card'
import skills from '../data/skills.json'
import styles from './Skills.module.scss'

export class Skills extends React.PureComponent {
	render() {
		return(
			<section id="skills" className={styles.skills}>
				<h2 className="hidden">Skills</h2>
				<div className={styles.deck}>
					{skills.map((item)=>
						<Card
							title={item.title}
							info={item.info}
							type={item.type}
						/>
					)}
				</div>
			</section>
		)
	}
}
