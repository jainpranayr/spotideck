import { Grid } from '../styles'
import { Artists } from '../types'

interface Props {
  artists: Artists
}

const ArtistsGrid: React.FC<Props> = ({ artists }) => {
  return (
    <>
      {artists && artists.items.length ? (
        <Grid type='artist'>
          {artists.items.slice(0, 10).map((artist, i) => (
            <li className='grid__item' key={i}>
              <div className='grid__item__inner'>
                {artist.images?.[0] && (
                  <div className='grid__item__img'>
                    <img src={artist.images[0].url} alt={artist.name} />
                  </div>
                )}
                <h3 className='grid__item__name overflow-ellipsis'>
                  {artist.name}
                </h3>
                <p className='grid__item__label'>Artist</p>
              </div>
            </li>
          ))}
        </Grid>
      ) : (
        <p className='empty-notice'>No artists available</p>
      )}
    </>
  )
}

export default ArtistsGrid
