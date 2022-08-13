import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import {
  Section,
  TimeRangeButtons,
  ArtistsGrid,
  Bars,
  LogOutBtn,
} from '../../components'
import { getTopArtists } from '../../services'
import { Artists } from '../../types'

const TopTracks: NextPage = () => {
  const [topArtists, setTopArtists] = useState<Artists>()
  const [activeRange, setActiveRange] = useState<'short' | 'medium' | 'long'>(
    'short'
  )
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setTopArtists(await getTopArtists(`${activeRange}_term`))
      setLoading(false)
    }

    fetchData()
  }, [activeRange])

  return (
    <div className='page'>
      {loading && <Bars />}

      <LogOutBtn />

      {topArtists && (
        <main>
          <Section title='Top Artists' breadCrumb={true}>
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
            <ArtistsGrid artists={topArtists.items} />
          </Section>
        </main>
      )}
    </div>
  )
}

export default TopTracks
