import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'

export default function As() {
  const router = useRouter()

  return (
    <>
      <Layout>
        <h2>as</h2>
        <li>
          <Link
            href={{
              pathname: `/link/as`,
            }}
          >
            Link href=&apos;/link/as&apos;
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: `/link/as`,
              query: { as: 'query1' },
            }}
            as={`/link/as`}
          >
            Link href=&apos;/link/as&apos; query: {'{'}as : &apos;query1&apos;
            {'}'} as={'{'}&apos;/link/as&apos;{'}'}
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: `/link/as`,
              query: { as: 'query2' },
            }}
            as={`/link/as`}
          >
            Link href=&apos;/link/as&apos; query: {'{'}as : &apos;query2&apos;
            {'}'} as={'{'}&apos;/link/as&apos;{'}'}
          </Link>
        </li>
        <br />
        <h2>query</h2>
        {router.query.as}
      </Layout>
    </>
  )
}
