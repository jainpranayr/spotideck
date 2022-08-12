import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Bars, LogOutBtn, Section } from '../../components'
import { useAvgColor } from '../../hooks'
import { formatWithCommas } from '../../lib'
import { getArtist } from '../../services'
import { Header } from '../../styles'
import { Artist } from '../../types'

const Artist: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [artist, SetArtist] = useState<Artist>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchArtist = async () => {
      SetArtist(await getArtist(typeof id === 'string' ? id : ''))
      setLoading(false)
    }

    if (id) fetchArtist()
  }, [id])

  const avgColor = useAvgColor(artist?.images?.[0]?.url || '')
  console.log(artist)

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
                  {artist.followers.total ? (
                    <span>
                      {formatWithCommas(artist.followers.total)}{' '}
                      {`Follower${artist.followers.total !== 1 ? 's' : ''}`}
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </Header>

          <main>
            <Section title='Artist' breadCrumb={true}>
              <p className='empty-notice'>WIP</p>
            </Section>
          </main>
        </>
      )}
    </>
  )
}

export default Artist
