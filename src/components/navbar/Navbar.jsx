"use client"

import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">OdinBook</Link>
        <div className={styles.links}>
        <span>Marek Rykaczewski</span>
        <div className={styles.profileContainer}>
            <div className={styles.imgContainer}>
                <Image alt='' fill={true} src={"https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
            </div>
            <div className={styles.arrowContainer}>
                <div className={styles.downArrow}></div>
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default Navbar