"use client"

import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const links = [
    {
        id: 1,
        title: "Test 1",
        url: "/"
    },
    {
        id: 2,
        title: "Test 2",
        url: "/"
    },
    {
        id: 3,
        title: "Test 3",
        url: "/"
    },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">OdinBook</Link>
        <div className={styles.links}>
        {links.map(link => (
            <Link key={link.id} href={link.url}>
                {link.title}
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Navbar