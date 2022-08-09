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

export const getTopArtists = (time_range = 'short_term'): Promise<Artists> => {
  return customGet(`/me/top/artists?time_range=${time_range}`)
}

export const getTopTracks = (time_range = 'short_term'): Promise<Tracks> => {
  return customGet(`/me/top/tracks?time_range=${time_range}`)
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
      getTopArtists(),
      getTopTracks(),
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
