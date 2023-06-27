import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'

const events = [
    {
        id: 1,
        title: "Donny Toretto",
    },
    {
        id: 2,
        title: "Gordon Freeman",
    },
    {
        id: 3,
        title: "Luke Skywalker",
    },
]

const Events = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>Upcoming Events</span>

        <div className={styles.eventsContainer}>
        {events.map(event => (
            <div className={styles.event} key={event.id}>
            <div className={styles.dateContainer}>
                <span style={{fontWeight: "bold"}}>20</span>
                <span>Dec</span>
            </div>
            <div className={styles.details}>
                <span> {event.name} </span>
                <span className={styles.subtitle}> 78k Interested </span>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Events