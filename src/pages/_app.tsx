import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { RecoilRoot } from 'recoil'

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  return (
    <>
      <RecoilRoot>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </RecoilRoot>
    </>
  )
}
