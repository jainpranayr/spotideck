import axios from 'axios'
import { customGet } from '../lib'
import { User, Playlists, FollowedArtists, Artists, Tracks } from '../types'

const getUser = async (): Promise<User> => {
  return await customGet('/me')
}

export const getPlaylists = async (): Promise<Playlists> => {
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

export const getPlaylistById = (playlist_id: string) => {
  return customGet(`/playlists/${playlist_id}`)
}

export const getTracksOfAPlaylist = (playlist_id: string) => {
  return customGet(`/playlists/${playlist_id}/tracks`)
}

export const getAudioFeaturesForTracks = (ids: string[]) => {
  return customGet(`/audio-features?ids=${ids}`)
}

export const getArtist = (artist_id: string) => {
  return customGet(`/artists/${artist_id}`)
}

export const getArtistTopTracks = (artist_id: string) => {
  return customGet(`/artists/${artist_id}/top-tracks?market=ES`)
}

export const getArtistAlbums = (artist_id: string) => {
  return customGet(`/artists/${artist_id}/albums?market=ES&offset=0`)
}

export const getRelatedArtists = (artist_id: string) => {
  return customGet(`/artists/${artist_id}/related-artists`)
}

export const getAlbum = (album_id: string) => {
  return customGet(`/albums/${album_id}`)
}

export const getAlbumTracks = (album_id: string) => {
  return customGet(`/albums/${album_id}/tracks`)
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
