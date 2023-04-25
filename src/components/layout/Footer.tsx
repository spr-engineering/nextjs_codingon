import styles from '@/styles/Layout.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>Github</div>
        <Link href="https://github.com/spr-engineering/nextjs_codingon">
          https://github.com/spr-engineering/nextjs_codingon
        </Link>
      </footer>
    </>
  )
}
