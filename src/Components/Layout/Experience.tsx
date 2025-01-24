import React from 'react'
import {EventCard as Event} from '../Card/index'
import styles from './Experience.module.scss'

export function Experience() {
	return(
		<section id="experience" className={styles.experience}>
			<h2 className="hidden">Experience</h2>
			<div className={styles.deck}>
				{experiences.reverse().map(event =>
					<Event key={event.date} {...event} />
				)}
			</div>
		</section>
	)
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
			"Darkwind Media (acquired by Camouflaj in October 2022): QA specialist",
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
	},
	{
		date: '2020-2022',
		events: [
			"University of Massachusetts Boston: BS Computer Science",
		]
	},
	{
		date: 'July 2022 - Present',
		events: [
			"Software Developer at DataOne Software",
			"Started as a summer Intern",
			"Worked part-time during Fall semester",
			"Started a full-time Software Developer I position in January 2023",
			"Promoted to Software Developer II in May 2024"
		]
	},
]
