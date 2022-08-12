import { ExternalUrls, Followers, ImagesEntity, Context } from './common'

export interface Artists extends Context<Artist> {
  total: number
}

export interface FollowedArtists {
  artists: Artists
}

export interface Artist {
  external_urls: ExternalUrls
  followers: Followers
  genres?: (string | null)[] | null
  href: string
  id: string
  images?: ImagesEntity[] | null
  name: string
  popularity: number
  type: string
  uri: string
}
