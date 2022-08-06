import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '../styles'
import { LogOutBtn } from '../components'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <NextNProgress color='#1db954' height={4} />
        <GlobalStyles />
        <LogOutBtn />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
