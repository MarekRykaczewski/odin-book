import Image from 'next/image'
import styles from './page.module.css'
import Post from '@/components/post/Post'

export default function Home() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input className={styles.input} placeholder="What's on your mind?" type="text" name="" id="" />
        <button className={styles.button}>Post</button>
      </form>
      <Post />
    </div>
  )
}
