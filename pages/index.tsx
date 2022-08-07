import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../styles/'
import { useAvgColor } from '../hooks'
import { LogOutBtn } from '../components'
import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'
import { User, Playlists, FollowedArtists } from '../types'

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  const [followedArtists, setFollowedArtists] = useState<FollowedArtists>()
  const [playlists, setPlaylists] = useState<Playlists>()

  useEffect(() => {
    const fetchData = async () => {
      const { user, followedArtists, playlists } = await getUserInfo()

      setUser(user)
      setFollowedArtists(followedArtists)
      setPlaylists(playlists)
    }

    fetchData()
  }, [])

  const avgColor = useAvgColor(user?.images?.[0]?.url || '')

  return (
    <>
      <Head>
        <title>spotideck - {user?.display_name}</title>
        <meta name='description' content='A dashboard for your spotify stats' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {user && playlists && followedArtists && (
        <>
          <LogOutBtn />
          <Header type='user' color={avgColor}>
            <div className='header__inner'>
              <img
                className='header__img'
                src={user.images?.[0]?.url || '/placeholder.svg'}
                alt='Avatar'
              />
              <div>
                <div className='header__overline'>Profile</div>
                <h1 className='header__name'>{user.display_name}</h1>
                <p className='header__meta'>
                  <span>
                    {playlists.total} Playlist
                    {playlists.total !== 1 ? 's' : ''}{' '}
                  </span>
                  <span>
                    {user.followers?.total} Follower
                    {user.followers?.total !== 1 ? 's' : ''}
                  </span>
                  <span>{followedArtists.artists?.total} Following</span>
                </p>
              </div>
            </div>
          </Header>
        </>
      )}
    </>
  )
}

export default Home
