import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props {
  randomValue: number
}

export default function Shallow({ randomValue }: Props) {
  const router = useRouter()
  const currentUrl = router.asPath.replace('/link/shallow/', '')
  const newUrl = currentUrl == 'on' ? 'off' : 'on'

  return (
    <>
      <Layout>
        <h2>shallow</h2>
        <div>Current URL /link/shallow/{currentUrl}</div>
        <li>
          <Link href={`/link/shallow/${newUrl}`} shallow={true}>
            Link href=&apos;/link/shallow/{newUrl}&apos; shallow=true
          </Link>
        </li>
        <li>
          <Link href={`/link/shallow/${newUrl}`}>
            Link href=&apos;/link/shallow/{newUrl}&apos; shallow=false (default)
          </Link>
        </li>
        <br />
        <h2>Get random number from SSR</h2>
        {randomValue}
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomValue = Math.floor(Math.random() * 999) + 1
  console.log(randomValue)
  return { props: { randomValue } }
}
