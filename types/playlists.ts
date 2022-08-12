import { ExternalUrls, ImagesEntity, Owner, Context, Followers } from './common'
import { Tracks } from './tracks'

export interface Playlists extends Context<Playlist> {}

export interface Playlist {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images?: ImagesEntity[] | null
  name: string
  owner: Owner
  primary_color?: null
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}
