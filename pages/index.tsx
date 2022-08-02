import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'
import { Brand, Container } from '../styles/'

const Home: NextPage = () => {
  const { data } = useSession()

  return (
    <>
      <Head>
        <title>spotideck</title>
        <meta name='description' content='A dashboard for your spotify stats' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data?.user && (
        <Container>
          <h1>Hello {data.user.name}</h1>
          <p>
            Welcome to <Brand>spotideck</Brand>
          </p>
          <button onClick={() => signOut()}>Log out</button>
        </Container>
      )}
    </>
  )
}

export default Home
