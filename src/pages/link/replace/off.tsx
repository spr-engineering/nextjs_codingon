import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '@components/layout/Layout'
import { useEffect, useState } from 'react'

export default function Off() {
  const router = useRouter()
  const currentUrl = router.asPath.replace('/link/replace/', '')
  const newUrl = currentUrl.includes('on') ? 'off' : 'on'

  const [length, setLength] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') setLength(window.history.length)
  }, [])

  return (
    <>
      <Layout>
        <h2>replace</h2>
        <div>Current URL /link/replace/{currentUrl}</div>
        <li>
          <Link href={`/link/replace/${newUrl}`} replace={true}>
            Link href=&apos;/link/replace/{newUrl}&apos; replace=true
          </Link>
        </li>
        <li>
          <Link href={`/link/replace/${newUrl}`}>
            Link href=&apos;/link/replace/{newUrl}&apos; replace=false (default)
          </Link>
        </li>
        <br />
        <h2>history stack length</h2>
        <h4>test only under 50</h4>
        <div>{length}</div>
      </Layout>
    </>
  )
}
