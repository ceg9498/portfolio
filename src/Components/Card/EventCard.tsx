import React from 'react'
import styles from './Card.module.css'

interface Props {
	date: string,
	events: string[],
}

export function EventCard(props: Props){
	const {date, events} = props
	return(
		<div className={styles.eventCard}>
			<h3>{date}</h3>
			<ul>
				{events.map(event =>
					<li>{event}</li>
				)}
			</ul>
		</div>
	);
}
