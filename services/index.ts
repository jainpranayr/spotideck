import axios from 'axios'
import { customGet } from '../lib'
import { User, Playlists, FollowedArtists, Artists, Tracks } from '../types'

const getUser = async (): Promise<User> => {
  return await customGet('/me')
}

const getPlaylists = async (): Promise<Playlists> => {
  return await customGet('/me/playlists')
}

const getFollowing = async (): Promise<FollowedArtists> => {
  return await customGet('/me/following?type=artist')
}

const getTopArtistsShort = async (): Promise<Artists> => {
  return await customGet('/me/top/artists?limit=50&time_range=short_term')
}

const getTopTracksShort = async (): Promise<Tracks> => {
  return await customGet('/me/top/tracks?limit=50&time_range=short_term')
}

export const getUserInfo = async (): Promise<{
  user: User
  followedArtists: FollowedArtists
  playlists: Playlists
  topArtists: Artists
  topTracks: Tracks
}> => {
  return await axios
    .all<any>([
      getUser(),
      getFollowing(),
      getPlaylists(),
      getTopArtistsShort(),
      getTopTracksShort(),
    ])
    .then(
      axios.spread(
        (user, followedArtists, playlists, topArtists, topTracks) => ({
          user: user,
          followedArtists: followedArtists,
          playlists: playlists,
          topArtists: topArtists,
          topTracks: topTracks,
        })
      )
    )
}
