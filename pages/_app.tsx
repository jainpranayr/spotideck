import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '../styles'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <NextNProgress
          color='#1db954'
          height={4}
          options={{ showSpinner: false }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
