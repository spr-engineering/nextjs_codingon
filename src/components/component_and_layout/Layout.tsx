import { ReactNode } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import styles from '@/styles/Layout.module.css'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.component_and_layout_main}>{children}</main>
      <Footer />
    </>
  )
}
