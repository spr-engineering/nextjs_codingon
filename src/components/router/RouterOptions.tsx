import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function RouterOptions() {
  const [useBeforePopState, setUseBeforePopState] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      alert('beforePopState')
      if (useBeforePopState) {
        if (as !== router.asPath) {
          window.history.pushState('', '')
          router.push(router.asPath)
          return false
        }
      }
      return true
    })
    return () => {
      router.beforePopState(() => true)
    }
  }, [useBeforePopState])

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
      <h2>Router Options</h2>
      <ul>
        <li>
          <h4>router.back</h4>
          <div>
            Navigate back in history. Equivalent to clicking the browser’s back
            button. <br />
            Executes window.history.back().
            <br />
            <button type="button" onClick={() => router.back()}>
              router.back
            </button>
          </div>
        </li>

        <li>
          <h4>router.reload</h4>
          <div>
            Reload the current URL. Equivalent to clicking the browser’s refresh
            button.
            <br /> Executes window.location.reload().
            <br />
            <button type="button" onClick={() => router.reload()}>
              router.reload
            </button>
          </div>
        </li>

        <li>
          <h4>router.beforePopState</h4>
          <div></div>
          use beforePopState
          <input
            type="checkbox"
            onChange={() => {
              setUseBeforePopState(!useBeforePopState)
            }}
          />
          , this prevents window.history.back().
        </li>
        <li>
          <h4>router.events</h4>
          Check alert and console
          <br />
          <br />
          <ul>
            <li>routeChangeStart : Fires when a route starts to change</li>
            <li>routeChangeComplete : Fires when a route changed completely</li>
            <li>
              routeChangeError : Fires when there&apos;s an error when changing
              routes, or a route load is cancelled{' '}
              <button
                type="button"
                onClick={() => router.push('/test_routeChangeError')}
              >
                test routeChangeError
              </button>
            </li>
            <li>
              beforeHistoryChange : Fires before changing the browser&apos;s
              history
            </li>
            <li>
              hashChangeStart : Fires when the hash will change but not the page
            </li>
            <li>
              hashChangeComplete : Fires when the hash has changed but not the
              page
            </li>
            <Link href="/router/hash">go test hash example</Link>
          </ul>
        </li>
      </ul>
    </>
  )
}
