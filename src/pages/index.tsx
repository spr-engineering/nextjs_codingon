import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout>
        <ul>
          <li>
            <Link href="/component_and_layout">component and layout</Link>
          </li>
          <li>
            <Link href="/bootstrap">bootstrap</Link>
          </li>
          <li>
            <Link href="/image">image</Link>
          </li>
          <li>
            <Link href="/link">link</Link>
          </li>
          <li>
            <Link href="/router">router</Link>
          </li>
          <li>
            <Link href="/api_routes">api_routes</Link>
          </li>
          <li>
            <Link href="/react_hook_form">react-hook-form</Link>
          </li>
        </ul>
      </Layout>
      <style jsx>{`
        li {
          padding: 5px;
        }
      `}</style>
    </>
  )
}
