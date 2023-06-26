import React from 'react'
import styles from './post.module.css'
import Image from 'next/image'

const Post = () => {
  return (
    <div className={styles.container}>

      <div className={styles.top}>

        <div className={styles.user}>
          <div className={styles.userImgContainer}>
            <Image alt='' fill={true} src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className={styles.userDetails}>
            <span>Marek Rykaczewski</span>
            <span>12 minutes ago</span>
          </div>
        </div>

        <div className={styles.options}>
          <div>Save</div>
          <div>Options</div>
        </div>

      </div>

      <div className={styles.imgContainer}>
      <Image style={{objectFit: "cover"}} alt='' fill={true} src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>

    </div>
  )
}

export default Post