import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'

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
        <main className='container'>
          <h1>Hello {data.user.name}</h1>
          <p>
            Welcome to <span className='brand'>spotideck</span>
          </p>
          <button className='logout-btn' onClick={() => signOut()}>
            Log out
          </button>
        </main>
      )}
    </>
  )
}

export default Home
