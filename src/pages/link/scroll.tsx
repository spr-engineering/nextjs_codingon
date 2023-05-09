import Link from 'next/link'
import Layout from '@components/layout/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Scroll() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Layout>
        <h2>scroll</h2>
        <br />
        <h4>↓ scroll down to click</h4>
        <div style={{ height: '110vh' }}></div>
        <li>
          <Link href="/link/scroll_result">
            Link href=&apos;/link/scroll_result&apos; scroll=true (default)
          </Link>
        </li>
        <li>
          <Link href="/link/scroll_result" scroll={false}>
            Link href=&apos;/link/scroll_result&apos; scroll=false
          </Link>
        </li>
        <br />
      </Layout>
    </>
  )
}
