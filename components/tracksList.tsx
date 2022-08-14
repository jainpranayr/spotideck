import Link from 'next/link'
import { formatDuration } from '../lib'
import { List } from '../styles'
import { ItemsEntity } from '../types'

interface Props {
  tracks: ItemsEntity[]
  limit?: number
}

const TrackList: React.FC<Props> = ({ tracks, limit }) => (
  <>
    {tracks ? (
      <List>
        {tracks.slice(0, limit)?.map((track, i) => (
          <li className='track__item' key={i}>
            <div className='track__item__num'>{i + 1}</div>
            <div className='track__item__title-group'>
              {track.album && (
                <div className='track__item__img'>
                  <img src={track?.album?.images?.[2].url} alt={track?.name} />
                </div>
              )}
              <div className='track__item__name-artist'>
                <div className='track__item__name overflow-ellipsis'>
                  {track?.name}
                </div>
                <div className='track__item__artist overflow-ellipsis'>
                  {track.artists?.map((artist, i) => (
                    <Link href={`/artists/${'A' + artist.id}`} key={i}>
                      <span>
                        {artist.name}
                        {i !== track.artists?.length! - 1 && ', '}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href={`/${'D' + track?.album?.id}`} passHref>
              <div className='track__item__album overflow-ellipsis'>
                {track?.album?.name}
              </div>
            </Link>
            <div className='track__item__duration'>
              {formatDuration(track?.duration_ms)}
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
