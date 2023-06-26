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

      <div className={styles.buttonsContainer}>
        <div className={styles.button}>Like 
          <span className={styles.number}>1,6k</span>
        </div>
        <div className={styles.button}>Comment 
          <span className={styles.number}>45</span>
        </div>
        <div className={styles.button}>
          <span>Share</span>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.profileImgContainer}>
          <Image alt='' fill={true} src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <input className={styles.input} placeholder="What's on your mind?" type="text" name="" id="" />
      </div>

      <div className={styles.comments}>
        <div> Sort by <span> Most Popular </span> </div>
        <div className={styles.user}>
          <div className={styles.profileImgContainer}>
            <Image alt='' fill={true} src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <p>Marek Rykaczewski</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iste. Voluptatibus, impedit sed! Voluptate, ullam.</p>
      </div>

      <div className={styles.bottom}>
        <span>View all comments</span>
      </div>

    </div>
  )
}

export default Post