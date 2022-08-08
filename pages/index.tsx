import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../styles/'
import { useAvgColor } from '../hooks'
import {
  ArtistsGrid,
  LogOutBtn,
  PlaylistsGrid,
  Section,
  TrackList,
} from '../components'
import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'
import { User, Playlists, FollowedArtists, Tracks, Artists } from '../types'

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  const [followedArtists, setFollowedArtists] = useState<FollowedArtists>()
  const [playlists, setPlaylists] = useState<Playlists>()
  const [topArtists, setTopArtists] = useState<Artists>()
  const [topTracks, setTopTracks] = useState<Tracks>()

  useEffect(() => {
    const fetchData = async () => {
      const { user, followedArtists, playlists, topArtists, topTracks } =
        await getUserInfo()

      setUser(user)
      setFollowedArtists(followedArtists)
      setPlaylists(playlists)
      setTopArtists(topArtists)
      setTopTracks(topTracks)
    }

    fetchData()
  }, [])

  const avgColor = useAvgColor(user?.images?.[0]?.url || '')
  const title = `spotideck ${
    user?.display_name ? '- ' + user?.display_name : ''
  }`

  return (
    <>
      <Head>
        <title>{title}</title>
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
                    {playlists.total} Public Playlist
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
      {topArtists && topTracks && playlists && (
        <main>
          <Section title='Top artists this month' seeAllLink='/top-artists'>
            <ArtistsGrid artists={topArtists} />
          </Section>
          <Section title='Top tracks this month' seeAllLink='/top-tracks'>
            <TrackList tracks={topTracks} />
          </Section>
          <Section title='Public Playlists' seeAllLink='/playlists'>
            <PlaylistsGrid playlists={playlists} />
          </Section>
        </main>
      )}
    </>
  )
}

export default Home
