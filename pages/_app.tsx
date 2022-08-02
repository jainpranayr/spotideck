import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '../styles'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
