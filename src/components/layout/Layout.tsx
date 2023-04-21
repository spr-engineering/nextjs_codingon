import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
