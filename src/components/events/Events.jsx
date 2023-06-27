import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'

const events = [
    {
        id: 1,
        title: "Computex 2023",
        date: "May 30",
        interested: "78k"
    },
    {
        id: 2,
        title: "Elon vs Zuckerberg",
        date: "TBA",
        interested: "126k"
    },
    {
        id: 3,
        title: "New Years Day",
        date: "Jan 1",
        interested: "251k"
    },
    {
        id: 4,
        title: "Women's Day",
        date: "Mar 8",
        interested: "572k"
    },
    {
        id: 5,
        title: "Men's Day",
        date: "Mar 10",
        interested: "378k"
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
                <span className={styles.date}> {event.date} </span>
            </div>
            <div className={styles.details}>
                <span> {event.title} </span>
                <span className={styles.subtitle}> {event.interested} Interested </span>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Events