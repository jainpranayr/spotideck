import Link from 'next/link'
import { formatDuration } from '../lib'
import { List } from '../styles'
import { Tracks } from '../types'

interface Props {
  tracks: Tracks
  limit?: number
}

const TrackList: React.FC<Props> = ({ tracks, limit }) => (
  <>
    {tracks ? (
      <List>
        {tracks.items.slice(0, limit)?.map((track, i) => (
          <li className='track__item' key={i}>
            <div className='track__item__num'>{i + 1}</div>
            <div className='track__item__title-group'>
              <div className='track__item__img'>
                <img src={track?.album?.images?.[2].url} alt={track.name} />
              </div>
              <div className='track__item__name-artist'>
                <div className='track__item__name overflow-ellipsis'>
                  {track.name}
                </div>
                <div className='track__item__artist overflow-ellipsis'>
                  {track.artists?.map((artist, i) => (
                    <Link href={artist.external_urls.spotify} key={i}>
                      <span>
                        {artist.name}
                        {i !== track.artists?.length! - 1 && ', '}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='track__item__album overflow-ellipsis'>
              {track.album.name}
            </div>
            <div className='track__item__duration'>
              {formatDuration(track.duration_ms)}
            </div>
          </li>
        ))}
      </List>
    ) : (
      <p className='empty-notice'>No tracks available</p>
    )}
  </>
)

export default TrackList
