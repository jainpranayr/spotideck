import Link from 'next/link'
import { Grid } from '../styles'
import { Playlists } from '../types'

interface Props {
  playlists: Playlists
  limit?: number
}

const PlaylistsGrid: React.FC<Props> = ({ playlists, limit }) => (
  <>
    {playlists && playlists.items.length ? (
      <Grid>
        {playlists.items.slice(0, limit).map((playlist, i) => (
          <li className='grid__item' key={i}>
            <Link href={`/playlists/${'P' + playlist.id}`} passHref>
              <div className='grid__item__inner'>
                <div className='grid__item__img'>
                  <img src={playlist.images?.[0].url} alt={playlist.name} />
                </div>
                <h3 className='grid__item__name overflow-ellipsis'>
                  {playlist.name}
                </h3>
                <p className='grid__item__label'>Playlist</p>
              </div>
            </Link>
          </li>
        ))}
      </Grid>
    ) : (
      <p className='empty-notice'>No playlists available</p>
    )}
  </>
)

export default PlaylistsGrid
