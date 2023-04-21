import styles from '@/styles/Layout.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.click}>Main</div>
        <div className={styles.click}>Menu</div>
      </nav>
    </>
  )
}
