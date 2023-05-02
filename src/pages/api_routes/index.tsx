import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ApiRoute() {
  const [name, setName] = useState('')
  const [dynamicRoutesEx, setDynamicRoutesEx] = useState('')
  const [statusResult, setStatusResult] = useState('')
  const [jsonResult, setJsonResult] = useState('')
  const [redirectResult, setRedirectResult] = useState('')
  const [sendResult, setSendResult] = useState('')

  const fetchHello = async () => {
    const res = await fetch('/api/routes_example/hello')
    const { name } = await res.json()
    setName(name)
  }

  const dynamicRouting = async () => {
    const res = await fetch(`/api/routes_example/dynamic_routes/123`)
    const { id } = await res.json()
    setDynamicRoutesEx(id)
  }

  const status = async () => {
    const res = await fetch('/api/routes_example/status')
    const { message } = await res.json()
    setStatusResult(message)
  }

  const json = async () => {
    const res = await fetch('/api/routes_example/json')
    const { error } = await res.json()
    setJsonResult(error)
  }

  const redirect = async () => {
    const res = await fetch('/api/routes_example/redirect')
    const { error } = await res.json()
    setRedirectResult(error)
  }

  const send = async () => {
    const res = await fetch('/api/routes_example/send')
    const { message } = await res.json()
    setSendResult(message)
  }

  useEffect(() => {
    fetchHello()
    dynamicRouting()
    status()
    json()
    send()
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
                <div>result : {name}</div>
              </li>
            </ul>
          </li>
          <li>
            <h4>dynamic api routes</h4>
            <ul>
              <li>
                <Link href="/api/routes_example/dynamic_routes/123">
                  /api/routes_example/dynamic_routes/123
                </Link>
                <div>result : {dynamicRoutesEx}</div>
              </li>
              <li>
                <Link href="/api/routes_example/dynamic_routes/JohnDoe">
                  /api/routes_example/dynamic_routes/JohnDoe
                </Link>
                <div>result : JohnDoe</div>
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
                  <Link href="/api/routes_example/status">
                    /api/routes_example/status
                  </Link>{' '}
                  result : {statusResult}
                </div>
              </li>
              <li>
                <strong>res.json(body)</strong> : Sends a JSON response. body
                must be a serializable object
                <div>
                  <Link href="/api/routes_example/json">
                    /api/routes_example/json
                  </Link>{' '}
                  result : {jsonResult}
                </div>
              </li>
              <li>
                <strong>res.send(body)</strong> : Sends the HTTP response. body
                can be a string, an object or a Buffer
                <div>
                  <Link href="/api/routes_example/send">
                    /api/routes_example/send
                  </Link>{' '}
                  result : {sendResult}
                </div>
              </li>
              <li>
                <strong>res.redirect([status,] path)</strong> : Redirects to a
                specified path or URL{' '}
                <div>
                  <Link href="/api/routes_example/redirect">
                    /api/routes_example/redirect
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </Layout>
    </>
  )
}
