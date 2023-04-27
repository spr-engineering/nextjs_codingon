import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function RouterOptions() {
  const router = useRouter()
  const [useBeforePopState, setUseBeforePopState] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const sendMsg = (msg: string) => {
    showPopup && alert(msg)
    console.log('** ' + msg)
  }
  const sendError = (msg: string, err: Error) => {
    showPopup && alert(msg)
    console.error(msg, err)
  }

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      showPopup && alert('beforePopState')
      console.log('** beforePopState')
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
  }, [useBeforePopState, showPopup])

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
      <h2>Router Options</h2>
      <h3>
        show popup{' '}
        <input
          type="checkbox"
          onChange={() => {
            setShowPopup(!showPopup)
          }}
        />
      </h3>
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
          Check alert or console log (F12)
          <br />
          <br />
          <ul>
            <li>
              <strong>routeChangeStart</strong> : Fires when a route starts to
              change
            </li>
            <li>
              <strong>routeChangeComplete</strong> : Fires when a route changed
              completely
            </li>
            <li>
              <strong>routeChangeError</strong>: Fires when there&apos;s an
              error when changing routes, or a route load is cancelled{' '}
              <button
                type="button"
                onClick={() => router.push('/test_routeChangeError')}
              >
                test routeChangeError
              </button>
            </li>
            <li>
              <strong>beforeHistoryChange</strong>: Fires before changing the
              browser&apos;s history
            </li>
            <li>
              <strong>hashChangeStart</strong>: Fires when the hash will change
              but not the page
            </li>
            <li>
              <strong>hashChangeComplete</strong>: Fires when the hash has
              changed but not the page
            </li>
            <Link
              href={{
                pathname: '/router/hash',
                query: { showPopup },
              }}
              as="/router/hash"
            >
              go test hash example
            </Link>
          </ul>
        </li>
      </ul>
    </>
  )
}
