import React from 'react'
import styles from './sidebar.module.css'
import Groups from '@/components/groups/Groups'
import Friends from '@/components/friends/Friends'
import Events from '@/components/events/Events'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <h1>OdinBook</h1>
        <input className={styles.input} type="text" placeholder='Explore OdinBook' name="" id="" />
        <div className={styles.items}>
          <div className={styles.item}> Home </div>
          <div className={styles.item}> Community </div>
          <div className={styles.item}> Marketplace </div>
          <div className={styles.item}> Events </div>
          <div className={styles.item}> News Feed </div>
          <div className={styles.line} />
          <Groups />
          <div className={styles.line} />
          <Events />
        </div>
    </div>
  )
}

export default Sidebar