import axios from 'axios'
import { customGet } from '../lib'
import { User, Playlists, FollowedArtists } from '../types'

const getUser = async (): Promise<User> => {
  return await customGet('/me')
}

const getPlaylists = async (): Promise<Playlists> => {
  return await customGet('/me/playlists')
}

const getFollowing = async (): Promise<FollowedArtists> => {
  return await customGet('/me/following?type=artist')
}

const getTopArtistsLong = async () => {
  return await customGet('/me/top/artists?limit=50&time_range=long_term')
}

const getTopTracksLong = async () => {
  return await customGet('/me/top/tracks?limit=50&time_range=long_term')
}

export const getUserInfo = () => {
  return axios
    .all([
      getUser(),
      getFollowing(),
      getPlaylists(),
      getTopArtistsLong(),
      getTopTracksLong(),
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
