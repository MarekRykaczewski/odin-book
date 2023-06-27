import React from 'react'
import styles from './groups.module.css'
import Image from 'next/image'

const Groups = () => {

  const groups = [
    {
        id: 1,
        title: "Poland Erasmus",
        img: "https://images.pexels.com/photos/46273/pexels-photo-46273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        members: 452
    },
    {
        id: 2,
        title: "Computer Geeks",
        img: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=400",
        members: 1558
    },
    {
        id: 3,
        title: "Foodies",
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
        members: 6731
    },
]

  return (
    <div className={styles.container}>
        <span className={styles.title}>My Groups</span>

        <div className={styles.groupsContainer}>
        {groups.map(group => (
          <div className={styles.group} key={group.id}>
            <div className={styles.imgContainer}>
                <Image style={{objectFit:'cover'}} alt='' src={group.img} fill={true} />
            </div>
            <div className={styles.details}>
              <span> {group.title} </span>
              <span className={styles.subtitle}> {group.members} Members </span>
            </div>
        </div>
        ))}
        </div>

    </div>
  )
}

export default Groups