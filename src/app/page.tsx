import Image from 'next/image'
import styles from './page.module.css'
import Post from '@/components/post/Post'
import Groups from '@/components/groups/Groups'
import Friends from '@/components/friends/Friends'
import Events from '@/components/events/Events'

export default function Home() {
  return (
    <div className={styles.container}>

      <form action="" className={styles.form}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image alt='' fill={true} src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <input className={styles.input} placeholder="What's on your mind?" type="text" name="" id="" />
        </div>
        <button className={styles.button}>Post</button>
      </form>

      <div className={styles.postsContainer}>
        <Post />
        <Post />
        <Post />
      </div>

      <div className={styles.sideContainer}>
        <Groups />
        <Friends />
        <Events />
      </div>

    </div>
  )
}
