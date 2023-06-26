import Image from 'next/image'
import styles from './page.module.css'
import Post from '@/components/post/Post'

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
      <Post />
    </div>
  )
}
