import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'

const Hash = () => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      alert(`Route change started to ${url}`)
      console.log(`Route change started to ${url}`)
    }
    const handleRouteChangeComplete = (url: string) => {
      alert(`Route change completed to ${url}`)
      console.log(`Route change completed to ${url}`)
    }
    const handleRouteChangeError = (err: Error, url: string) => {
      alert(`Error occurred while changing route to ${url}`)
      console.error(`Error occurred while changing route to ${url}`, err)
    }
    const handleBeforeHistoryChange = (url: string) => {
      alert(`Before history change to ${url}`)
      console.log(`Before history change to ${url}`)
    }
    const handleHashChangeStart = (url: string) => {
      alert(`Hash change started to ${url}`)
      console.log(`Hash change started to ${url}`)
    }
    const handleHashChangeComplete = (url: string) => {
      alert(`Hash change completed to ${url}`)
      console.log(`Hash change completed to ${url}`)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    router.events.on('beforeHistoryChange', handleBeforeHistoryChange)
    router.events.on('hashChangeStart', handleHashChangeStart)
    router.events.on('hashChangeComplete', handleHashChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
      router.events.off('beforeHistoryChange', handleBeforeHistoryChange)
      router.events.off('hashChangeStart', handleHashChangeStart)
      router.events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [])
  return (
    <>
      <Layout>
        <div>
          <h2>router.events results</h2>
          <ul>
            <li>
              <Link href="#hash1">Hash 1</Link>
            </li>
            <li>
              <Link href="#hash2">Hash 2</Link>
            </li>
          </ul>
        </div>{' '}
      </Layout>
    </>
  )
}

export default Hash
