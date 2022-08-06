import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '../styles'
import { LogOutBtn } from '../components'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <LogOutBtn />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
