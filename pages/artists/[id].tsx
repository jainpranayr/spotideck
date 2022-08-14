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
import { Header, PrimaryBtn } from '../../styles'
import { Albums, Artist, FollowedArtists, Tracks } from '../../types'

const Artist: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [artist, SetArtist] = useState<Artist>()
  const [topTracks, setTopTracks] = useState<Tracks>()
  const [albums, setAlbums] = useState<Albums>()
  const [relatedArtists, setRelatedArtists] = useState<FollowedArtists>()
  const [loading, setLoading] = useState<boolean>(true)

  const artist_id = typeof id === 'string' ? id.slice(1) : ''

  useEffect(() => {
    const fetchArtist = async () => {
      SetArtist(await getArtist(artist_id))
      setTopTracks(await getArtistTopTracks(artist_id))
      setAlbums(await getArtistAlbums(artist_id))
      setRelatedArtists(await getRelatedArtists(artist_id))
      setLoading(false)
    }

    if (artist_id) fetchArtist()
  }, [artist_id])

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
            <Section title=''>
              <PrimaryBtn href={artist.external_urls.spotify}>
                Listen On Spotify
              </PrimaryBtn>
            </Section>
            <Section title='' breadCrumb={true}>
              {topTracks && (
                <Section title='Top Tracks'>
                  <TrackList tracks={topTracks?.tracks} limit={10} />
                </Section>
              )}
              {albums && (
                <Section title='Discography'>
                  <AlbumsGrid albums={albums} limit={10} />
                </Section>
              )}
              {relatedArtists && (
                <Section title='Fans also like'>
                  <ArtistsGrid artists={relatedArtists.artists} limit={10} />
                </Section>
              )}
            </Section>
          </main>
        </>
      )}
    </>
  )
}

export default Artist
