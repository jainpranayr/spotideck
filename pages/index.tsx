import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>spotideck</title>
        <meta name='description' content='A dashboard for your spotify stats' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello, World</h1>
    </>
  )
}

export default Home
