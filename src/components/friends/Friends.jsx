import React from 'react'
import styles from './friends.module.css'
import Image from 'next/image'

const Friends = () => {

    const friends = [
        {
            id: 1,
            name: "Donny Toretto",
            img: "https://images.pexels.com/photos/1802766/pexels-photo-1802766.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 2,
            name: "Gordon Freeman",
            img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 3,
            name: "Luke Skywalker",
            img: "https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
    ]

    return (
    <div className={styles.container}>
        <span className={styles.title}>My Friends</span>

        <div className={styles.friendsContainer}>
        {friends.map(friend => (
            <div className={styles.friend} key={friend.id}>
            <div className={styles.imgContainer}>
                <Image style={{objectFit:'cover'}} alt='' src={friend.img} fill={true} />
            </div>
            <div className={styles.details}>
                <span> {friend.name} </span>
                <span className={styles.subtitle}> Last Online: Just Now </span>
            </div>
        </div>
        ))}
        </div>

    </div>
      )
    }
export default Friends