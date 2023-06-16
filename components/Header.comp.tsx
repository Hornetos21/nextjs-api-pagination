import Link from 'next/link'
import styles from './Header.module.scss'
const HeaderComp = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/articles">News</Link>
      <Link href="/blogs">Blog</Link>
    </header>
  )
}

export default HeaderComp
