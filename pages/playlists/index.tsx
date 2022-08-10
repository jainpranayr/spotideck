import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Bars, LogOutBtn, PlaylistsGrid, Section } from '../../components'
import { getPlaylists } from '../../services'
import { Playlists } from '../../types'

const Playlists: NextPage = () => {
  const [playlists, setPlaylists] = useState<Playlists>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setPlaylists(await getPlaylists())
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className='page'>
      {loading && <Bars />}

      <LogOutBtn />

      {playlists && (
        <main>
          <Section title='Public Playlists' breadCrumb={true}>
            <PlaylistsGrid playlists={playlists} />
          </Section>
        </main>
      )}
    </div>
  )
}

export default Playlists
