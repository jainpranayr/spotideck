import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { Header } from '../styles/'

const Home: NextPage = () => {
  const { data } = useSession()
  console.log(data)

  return (
    <>
      <Head>
        <title>spotideck</title>
        <meta name='description' content='A dashboard for your spotify stats' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data?.user && (
        <Header type='user' color='#9cc53a'>
          <div className='header__inner'>
            <img className='header__img' src={data.user.image} alt='Avatar' />
            <div>
              <div className='header__overline'>Profile</div>
              <h1 className='header__name'>{data.user.name}</h1>
              <p className='header__meta'>
                <span>6 Playlists</span>
                <span>1 Follower</span>
              </p>
            </div>
          </div>
        </Header>
      )}
    </>
  )
}

export default Home
