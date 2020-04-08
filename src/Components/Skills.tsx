import React from 'react'
import {SkillCard as Card} from './Card'
import color from '../data/techColors'
import skills from '../data/skills.json'
import styles from './Skills.module.css'

export class Skills extends React.PureComponent {
	render() {
		return(
			<section id="skills" className={styles.skills}>
				<h2 className="hidden">Skills</h2>
				<div className={styles.deck}>
					{skills.map((item)=>
						<Card
							title={item.title}
							color={color.get(item.title)}
							info={item.info}
						/>
					)}
				</div>
			</section>
		)
	}
}
