import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2 style={{ paddingLeft: '20px' }}>목차</h2>
      <ul>
        <li>
          <Link href="/component_and_layout">component_and_layout</Link>
        </li>
        <li>
          <Link href="/bootstrap">bootstrap</Link>
        </li>
        <li>
          <Link href="/router">router</Link>
        </li>
        <li>
          <Link href="/image">image</Link>
        </li>
      </ul>
    </>
  )
}
