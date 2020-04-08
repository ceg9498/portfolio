import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import {SkillCard as Card} from './Card'
import skills from '../data/skills.json'
import styles from './Skills.module.scss'

export class Skills extends React.PureComponent<any, any> {
	constructor(props){
		super(props);
		this.state = {
			items: skills,
			language: true,
			framework: true,
			library: true,
			database: true
		}
	}

	_filter(type:string) {
		let nState = {...this.state}
		nState[type] = !this.state[type]
		if(nState[type]){
			skills.filter((obj)=>obj.type === type).forEach((obj)=>{
				nState.items.unshift(obj)
			})
		} else {
			nState.items = nState.items.filter((obj)=>obj.type !== type)
		}
		this.setState(nState)
	}

	render() {
		const {items} = this.state
		return(
			<section id="skills" className={styles.skills}>
				<h2 className="hidden">Skills</h2>
				<div className={styles.typeSelector}>
					<button
						onClick={()=>this._filter('language')}
					>
						<FontAwesomeIcon icon={this.state.language ? faCheck : faTimes} />
						&nbsp;Languages
					</button>
					<button
						onClick={()=>this._filter('framework')}
					>
						<FontAwesomeIcon icon={this.state.framework ? faCheck : faTimes} />
						&nbsp;Frameworks
					</button>
					<button
						onClick={()=>this._filter('library')}
					>
						<FontAwesomeIcon icon={this.state.library ? faCheck : faTimes} />
						&nbsp;Libraries
					</button>
					<button
						onClick={()=>this._filter('database')}
					>
						<FontAwesomeIcon icon={this.state.database ? faCheck : faTimes} />
						&nbsp;Data Storage
					</button>
				</div>
				<div className={styles.deck}>
					{items.map((item)=>
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
