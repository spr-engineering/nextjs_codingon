import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ApiRoute() {
  const [name, setName] = useState('')
  const [dynamicInput, setDynamicInput] = useState('')
  const [catchAllRoutesInput, setCatchAllRoutesInput] = useState('')

  const fetchHello = async () => {
    const res = await fetch('/api/routes_example/hello')
    const { name } = await res.json()
    setName(name)
  }

  useEffect(() => {
    fetchHello()
  }, [])

  return (
    <>
      <Layout>
        <h2>api route</h2>
        <ul>
          <li>
            <h4>api routes</h4>
            <div>
              Any file inside the folder pages/api is mapped to
              /api/routes_example/* and will be treated as an API endpoint.
            </div>
            <br />
            <ul>
              <li>
                <Link href="/api/routes_example/hello">
                  /api/routes_example/hello
                </Link>
                <div>
                  res.status(200).json(&#123; name: &apos;John Doe&apos; &#125;)
                </div>
                <div>result : {name}</div>
              </li>
            </ul>
          </li>
          <li>
            <h4>dynamic api routes</h4>
            <ul>
              <li>
                input one route
                <br />
                <input
                  value={dynamicInput}
                  onChange={(e) => {
                    setDynamicInput(e.target.value)
                  }}
                />
                <br />
                result :{' '}
                <Link
                  href={`/api/routes_example/dynamic_routes/${dynamicInput}`}
                >
                  /api/routes_example/dynamic_routes/{dynamicInput}
                </Link>
              </li>
              <li>
                catch all routes (separate by &apos;/&apos;, ex.1/2/3)
                <br />
                <input
                  value={catchAllRoutesInput}
                  onChange={(e) => {
                    setCatchAllRoutesInput(e.target.value)
                  }}
                />
                <br />
                result :{' '}
                <Link
                  href={`/api/routes_example/dynamic_routes/catch_all_routes/${catchAllRoutesInput}`}
                >
                  /api/routes_example/dynamic_routes/catch_all_routes/
                  {catchAllRoutesInput}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>api routes response helpers</h4>
            <ul>
              <li>
                <strong>res.status(code)</strong> : Setting the status code of a
                response
                <div>
                  res.status(200).json( &#123; message: &apos;Hello from
                  Next.js!&apos; &#125;){' '}
                  <Link href="/api/routes_example/status">▶ result</Link>
                </div>
              </li>
              <li>
                <strong>res.json(body)</strong> : Sends a JSON response. body
                must be a serializable object
                <div>
                  res.status(200).json( &#123; message: &apos;Hello from
                  Next.js!&apos; &#125;){' '}
                  <Link href="/api/routes_example/json">▶ result</Link>
                </div>
              </li>
              <li>
                <strong>res.send(body)</strong> : Sends the HTTP response. body
                can be a string, an object or a Buffer
                <div>
                  res.send(&#123; message: &apos;Hello from
                  Next.js!&apos;&#125;){' '}
                  <Link href="/api/routes_example/send">▶ result</Link>
                </div>
              </li>
              <li>
                <strong>res.redirect([status,] path)</strong> : Redirects to a
                specified path or URL{' '}
                <div>
                  res.redirect(307, &apos;/&apos;){' '}
                  <Link href="/api/routes_example/redirect">▶ result</Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </Layout>
    </>
  )
}
