import React from 'react'
import styles from './Experience.module.scss'

export function Experience() {
	return(
		<section id="experience" className={styles.experience}>
			<h2 className="hidden">Experience</h2>
			{experiences.map(event => 
				<Event {...event} />
			)}
		</section>
	)
}

function Event(props: {date: string, events: string[]}) {
	const {date, events} = props
	return(<>
		<h3>{date}</h3>
		<ul>
			{events.map(event =>
				<li>{event}</li>
			)}
		</ul>
	</>)
}

const experiences = [
	{
		date: '2009-2012',
		events: [
			"ECPI University: BS Computer Information Science",
		],
	},
	{
		date: '2012-2017',
		events: [
			"Darkwind Media: QA specialist",
		],
	},
	{
		date: 'June 2019',
		events: [
			"freeCodeCamp: completed the Responsive Web Design Certification",
		],
	},
	{
		date: 'August 2019',
		events: [
			"freeCodeCamp: completed the JavaScript Algorithms and Data Structures Certification",
			"freeCodeCamp: completed the Front End Libraries Certification",
			"freeCodeCamp: completed the Data Visualization Certification",
			"freeCodeCamp: completed the APIs and Microservices Certification",
		]
	},
	{
		date: 'October 2019',
		events: [
			"freeCodeCamp: completed the Information Security and Quality Assurance Certification",
			"freeCodeCamp: earned the Full Stack Certification for completing all other certifications"
		]
	},
	{
		date: '2020',
		events: [
			"Open Source: submitted my first pull request",
		]
	}
]
