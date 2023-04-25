import styles from '@/styles/Layout.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
      </nav>
    </>
  )
}
