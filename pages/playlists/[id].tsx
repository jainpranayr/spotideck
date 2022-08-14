import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { Bars, LogOutBtn, Section, TrackList } from '../../components'
import { useAvgColor } from '../../hooks'
import { formatDurationHumans } from '../../lib'
import {
  getAudioFeaturesForTracks,
  getPlaylistById,
  getTracksOfAPlaylist,
} from '../../services'
import { Dropdown, Header, PrimaryBtn } from '../../styles'
import { AudioFeatures, Playlist, Tracks } from '../../types'

const Playlist: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [playlist, setPlaylist] = useState<Playlist>()
  const [playlistTracks, setPlaylistTracks] = useState<Tracks>()
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures>()
  const [sortValue, setSortValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const playlist_id: string = typeof id === 'string' ? id.slice(1) : ''
  let duration: number = 0

  useEffect(() => {
    const fetchPlaylist = async () => {
      setPlaylist(await getPlaylistById(playlist_id))
      setLoading(false)
    }

    const fetchTracks = async () => {
      setPlaylistTracks(await getTracksOfAPlaylist(playlist_id))
    }

    if (playlist_id) {
      fetchPlaylist()
      fetchTracks()
    }
  }, [playlist_id])

  useEffect(() => {
    const fetchAudioFeatures = async () => {
      const ids: string[] = []
      playlistTracks?.items.forEach(item => ids.push(item?.track?.id))
      setAudioFeatures(await getAudioFeaturesForTracks(ids))
    }

    if (playlistTracks?.items) {
      fetchAudioFeatures()
    }
  }, [playlistTracks])

  const tracksWithAudioFeatures = useMemo(() => {
    if (!playlistTracks?.items || !audioFeatures) {
      return null
    }

    return playlistTracks.items.map(track => {
      const curr = track.track

      if (!track.audio_features) {
        const audioFeaturesObj = audioFeatures.audio_features.find(item => {
          if (!item || !track) {
            return null
          }

          return item.id === track.track.id
        })

        curr.audio_features = audioFeaturesObj
      }

      return curr
    })
  }, [audioFeatures, playlistTracks])

  const sortedTracks = useMemo(() => {
    if (!tracksWithAudioFeatures) {
      return null
    }

    return [...tracksWithAudioFeatures].sort((a, b) => {
      const aF = a.audio_features
      const bF = b.audio_features

      if (!aF || !bF) {
        return 1
      }

      // @ts-ignore
      return bF[sortValue] - aF[sortValue]
    })
  }, [sortValue, tracksWithAudioFeatures])

  const sortOptions = ['danceability', 'tempo', 'energy']
  const avgColor = useAvgColor(playlist?.images?.[0]?.url || '')
  playlistTracks?.items?.map(
    track => (duration = duration + track.track.duration_ms)
  )

  return (
    <>
      {loading && <Bars />}

      {playlist && (
        <>
          <LogOutBtn />
          <Header color={avgColor}>
            <div className='header__inner'>
              <img
                className='header__img'
                src={playlist.images?.[0].url}
                alt='Playlist Artwork'
              />
              <div>
                <div className='header__overline'>Playlist</div>
                <h1 className='header__name'>{playlist.name}</h1>
                <p className='header__meta'>
                  {playlist.followers.total ? (
                    <span>
                      {playlist.followers.total}{' '}
                      {`follower${playlist.followers.total !== 1 ? 's' : ''}`}
                    </span>
                  ) : null}
                  <span>
                    {playlist.tracks.total}{' '}
                    {`song${playlist.tracks.total !== 1 ? 's' : ''}`}
                  </span>
                  <span>{formatDurationHumans(duration)}</span>
                </p>
              </div>
            </div>
          </Header>

          <main>
            <Section title=''>
              <PrimaryBtn href={playlist.external_urls.spotify}>
                Listen On Spotify
              </PrimaryBtn>
            </Section>
            <Section title='Playlist' breadCrumb={true}>
              <Dropdown>
                <select
                  name='track-order'
                  id='order-select'
                  onChange={e => setSortValue(e.target.value)}>
                  <option value=''>Sort tracks</option>
                  {sortOptions.map((option, i) => (
                    <option value={option} key={i}>
                      {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                    </option>
                  ))}
                </select>
              </Dropdown>

              {sortedTracks ? (
                <TrackList tracks={sortedTracks} />
              ) : (
                <p className='empty-notice'>No Tracks Found</p>
              )}
            </Section>
          </main>
        </>
      )}
    </>
  )
}

export default Playlist
