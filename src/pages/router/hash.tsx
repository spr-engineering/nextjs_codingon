import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import IntroduceCodingON from '@/components/component_and_layout/IntroduceCodingON'

const Hash = () => {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(router.query.showPopup)

  const sendMsg = (msg: string) => {
    showPopup && alert(msg)
    console.log('** ' + msg)
  }
  const sendError = (msg: string, err: Error) => {
    showPopup && alert(msg)
    console.error(msg, err)
  }

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      sendMsg(`Route change started to ${url}`)
    }
    const handleRouteChangeComplete = (url: string) => {
      sendMsg(`Route change completed to ${url}`)
    }
    const handleRouteChangeError = (err: Error, url: string) => {
      sendError(`Error occurred while changing route to ${url}`, err)
    }
    const handleBeforeHistoryChange = (url: string) => {
      sendMsg(`Before history change to ${url}`)
    }
    const handleHashChangeStart = (url: string) => {
      sendMsg(`Hash change started to ${url}`)
    }
    const handleHashChangeComplete = (url: string) => {
      sendMsg(`Hash change completed to ${url}`)
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
  }, [showPopup])
  return (
    <>
      <Layout>
        <div>
          <h2>router.events results</h2>
          <h3>
            show popup{' '}
            <input
              type="checkbox"
              checked={showPopup}
              onChange={() => {
                setShowPopup(!showPopup)
              }}
            />
          </h3>
          <ul>
            <li>
              <div id="hash1">
                <Link href="#hash2">Move to hash 2</Link>
                <br />
                <br />
                <div style={{ backgroundColor: 'black' }}>
                  <IntroduceCodingON />
                </div>
              </div>
            </li>
            <div style={{ height: '80vh' }}></div>
            <li>
              <div id="hash2">
                <Link href="#hash1">Move to hash 1</Link>
                <br />
                <br />
                <div style={{ backgroundColor: 'black' }}>
                  <IntroduceCodingON />
                </div>
              </div>
            </li>
          </ul>
        </div>{' '}
      </Layout>
    </>
  )
}

export default Hash
