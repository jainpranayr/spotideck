import { Grid } from '../styles'
import { Albums } from '../types'

interface Props {
  albums: Albums
  limit?: number
}

const AlbumsGrid: React.FC<Props> = ({ albums, limit }) => (
  <>
    {albums && albums.items.length ? (
      <Grid>
        {albums.items.slice(0, limit).map((album, i) => (
          <li className='grid__item' key={i}>
            <div className='grid__item__inner'>
              <div className='grid__item__img'>
                <img src={album.images?.[0].url} alt={album.name} />
              </div>
              <h3 className='grid__item__name overflow-ellipsis'>
                {album.name}
              </h3>
              <p className='grid__item__label'>{album.album_type}</p>
            </div>
          </li>
        ))}
      </Grid>
    ) : (
      <p className='empty-notice'>No albums available</p>
    )}
  </>
)

export default AlbumsGrid
