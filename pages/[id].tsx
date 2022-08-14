import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Bars, LogOutBtn, Section, TrackList } from '../components'
import { useAvgColor } from '../hooks'
import { formatDuration, formatDurationHumans } from '../lib'
import { getAlbum, getAlbumTracks } from '../services'
import { Container, Header, PrimaryBtn } from '../styles'
import { Album, Tracks } from '../types'
import PageNotFound from './404'

const Album: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState<boolean>(true)
  const [album, setAlbum] = useState<Album>()
  const [tracks, setTracks] = useState<Tracks>()

  const album_id = typeof id === 'string' ? id.slice(1) : ''
  let duration: number = 0

  useEffect(() => {
    const fetchAlbum = async () => {
      setAlbum(await getAlbum(album_id))
      setTracks(await getAlbumTracks(album_id))
      setLoading(false)
    }

    if (album_id) fetchAlbum()
  }, [album_id])

  const avgColor = useAvgColor(album?.images?.[0].url || '')
  tracks?.items?.map(track => (duration = duration + track.duration_ms))

  return (
    <>
      {!id?.toString().startsWith('D') && <PageNotFound />}

      {loading && <Bars />}

      {album && album?.name !== 'AxiosError' ? (
        <>
          <LogOutBtn />
          <Header color={avgColor}>
            <div className='header__inner'>
              <img
                className='header__img'
                src={album.images?.[0].url}
                alt='album Artwork'
              />
              <div className='header__text'>
                <div className='header__overline'>album</div>
                <h1 className='header__name'>{album.name}</h1>
                <p className='header__meta'>
                  <span>
                    By&nbsp;
                    {album.artists?.map((artist, i) => (
                      <Link
                        key={i}
                        href={`/artists/${'A' + artist.id}`}
                        passHref>
                        <a>
                          {artist.name}
                          {i !== album.artists?.length! - 1 && ','}&nbsp;
                        </a>
                      </Link>
                    ))}
                  </span>
                  <span>
                    {album.total_tracks}{' '}
                    {`Song${album.total_tracks !== 1 ? 's' : ''}`}
                  </span>
                  <span>{formatDurationHumans(duration)}</span>
                </p>
              </div>
            </div>
          </Header>
          <main>
            <Section title=''>
              <PrimaryBtn href={album.external_urls?.spotify}>
                Listen On Spotify
              </PrimaryBtn>
            </Section>
            <Section title='' breadCrumb={true}>
              {tracks && (
                <Section title='Tracks'>
                  <TrackList tracks={tracks?.items} />
                </Section>
              )}
            </Section>
          </main>
        </>
      ) : (
        <Container>
          <p className='empty-notice'>No album data available</p>
        </Container>
      )}
    </>
  )
}

export default Album
