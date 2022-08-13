import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  AlbumsGrid,
  ArtistsGrid,
  Bars,
  LogOutBtn,
  Section,
  TrackList,
} from '../../components'
import { useAvgColor } from '../../hooks'
import { formatWithCommas } from '../../lib'
import {
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtists,
} from '../../services'
import { Header } from '../../styles'
import { Albums, Artist, FollowedArtists, Tracks } from '../../types'

const Artist: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [artist, SetArtist] = useState<Artist>()
  const [topTracks, setTopTracks] = useState<Tracks>()
  const [albums, setAlbums] = useState<Albums>()
  const [relatedArtists, setRelatedArtists] = useState<FollowedArtists>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchArtist = async () => {
      const artist_id = typeof id === 'string' ? id.slice(1) : ''
      SetArtist(await getArtist(artist_id))
      setTopTracks(await getArtistTopTracks(artist_id))
      setAlbums(await getArtistAlbums(artist_id))
      setRelatedArtists(await getRelatedArtists(artist_id))
      setLoading(false)
    }

    if (id) fetchArtist()
  }, [id])

  const avgColor = useAvgColor(artist?.images?.[0]?.url || '')

  return (
    <>
      {loading && <Bars />}
      {artist && (
        <>
          <LogOutBtn />
          <Header color={avgColor} type='user'>
            <div className='header__inner'>
              <img
                className='header__img'
                src={artist.images?.[0].url}
                alt='Artist Artwork'
              />
              <div className='header__text'>
                <div className='header__overline'>Artist</div>
                <h1 className='header__name'>{artist.name}</h1>
                <p className='header__meta'>
                  <span>
                    {formatWithCommas(artist.followers.total)}{' '}
                    {`Follower${artist.followers.total !== 1 ? 's' : ''}`}
                  </span>
                  <span>{artist.popularity}% Popularity</span>
                </p>
              </div>
            </div>
          </Header>

          <main>
            <Section title='Top tracks' breadCrumb={true}>
              {topTracks && (
                <>
                  <h2
                    className='section__heading'
                    style={{ marginBlock: '12px' }}>
                    Top Tracks
                  </h2>
                  <TrackList tracks={topTracks?.tracks} limit={10} />
                </>
              )}
              {albums && (
                <>
                  <h2
                    className='section__heading'
                    style={{
                      marginBlockStart: '24px',
                      marginBlockEnd: '12px',
                    }}>
                    Discography
                  </h2>
                  <AlbumsGrid albums={albums} limit={10} />
                </>
              )}
              {relatedArtists && (
                <>
                  <h2
                    className='section__heading'
                    style={{
                      marginBlockStart: '24px',
                      marginBlockEnd: '12px',
                    }}>
                    Fans also like
                  </h2>
                  <ArtistsGrid artists={relatedArtists.artists} limit={10} />
                </>
              )}
            </Section>
          </main>
        </>
      )}
    </>
  )
}

export default Artist
