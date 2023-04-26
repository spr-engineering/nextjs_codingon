import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Login() {
  const { data: session } = useSession()
  const [status, setStatus] = useState('logged out')

  useEffect(() => {
    if (session) {
      console.log('session', session)
      setStatus(session.user.name + ' logged in')
    } else {
      setStatus('logged out')
    }
  }, [session])

  const login = async (e: any) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    console.log('username', username, 'password', password)
    const response = await signIn('credentials', {
      username,
      password,
      // redirect: false,
    })
    console.log('response', response)
  }

  return (
    <>
      <div className="bm10">current status : {status}</div>
      <button className="bm10" onClick={() => signIn()}>
        Next-auth default login
      </button>
      <form onSubmit={login}>
        <label>
          id <input name="username" type="text" />
        </label>
        <br />
        <label>
          pw <input name="password" type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <section>
        <button
          style={{
            width: '183px',
            height: '45px',
            position: 'relative',
            margin: '10px',
          }}
          onClick={() => signIn('kakao')}
        >
          <Image src="/kakao_login_medium_narrow.png" alt="kakao login" fill />
        </button>
        <button
          style={{
            width: '183px',
            height: '45px',
            position: 'relative',
            margin: '10px',
          }}
          onClick={() => signIn('google')}
        >
          <Image
            src="/btn_google_signin_dark_normal_web.png"
            alt="google login"
            fill
          />
        </button>
        <button
          style={{
            width: '183px',
            height: '45px',
            position: 'relative',
            margin: '10px',
          }}
          onClick={() => signOut()}
        >
          Log out
        </button>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
        }

        .bm10 {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}
