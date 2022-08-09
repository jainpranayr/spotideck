import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Section, TimeRangeButtons, ArtistsGrid, Bars } from '../components'
import { getTopArtists } from '../services'
import { Artists } from '../types'

const TopTracks: NextPage = () => {
  const [topArtists, setTopArtists] = useState<Artists>()
  const [activeRange, setActiveRange] = useState<string>('short')
  const [loading, setLoading] = useState<boolean>(true)

  console.log(activeRange)

  useEffect(() => {
    const fetchData = async () => {
      setTopArtists(await getTopArtists(`${activeRange}_term`))
      setLoading(false)
    }

    fetchData()
  }, [activeRange])

  return (
    <>
      {loading && <Bars />}

      {topArtists && (
        <main>
          <Section title='Top Artists' breadCrumb={true}>
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
            <ArtistsGrid artists={topArtists} />
          </Section>
        </main>
      )}
    </>
  )
}

export default TopTracks
