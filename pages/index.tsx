import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { status, data } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!status || status === 'unauthenticated') {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

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
