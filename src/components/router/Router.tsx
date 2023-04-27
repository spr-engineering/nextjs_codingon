import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Router() {
  const router = useRouter()
  return (
    <>
      <Link
        href="/router/red"
        style={{ color: router.pathname === '/router/red' ? 'red' : 'black' }}
      >
        RED
      </Link>
      <br />
      <Link
        href="/router/blue"
        style={{ color: router.pathname === '/router/blue' ? 'blue' : 'black' }}
      >
        BLUE
      </Link>
    </>
  )
}
