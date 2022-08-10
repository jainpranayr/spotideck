import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import {
  Section,
  TimeRangeButtons,
  Bars,
  LogOutBtn,
  TrackList,
} from '../components'
import { getTopTracks } from '../services'
import { Tracks } from '../types'

const TopTracks: NextPage = () => {
  const [topTracks, setTopTracks] = useState<Tracks>()
  const [activeRange, setActiveRange] = useState<'short' | 'medium' | 'long'>(
    'short'
  )
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setTopTracks(await getTopTracks(`${activeRange}_term`))
      setLoading(false)
    }

    fetchData()
  }, [activeRange])

  return (
    <div className='page'>
      {loading && <Bars />}

      <LogOutBtn />

      {topTracks && (
        <main>
          <Section title='Top Artists' breadCrumb={true}>
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
            <TrackList tracks={topTracks} />
          </Section>
        </main>
      )}
    </div>
  )
}

export default TopTracks
