import { AudioFeaturesItems } from './audioFeatures'
import { ExternalIds, ExternalUrls, ImagesEntity, Context } from './common'

export interface Tracks extends Context<ItemsEntity> {
  tracks: ItemsEntity[]
  total: number
}

export interface ItemsEntity {
  track?: any
  album: Album
  artists?: ArtistsEntity[] | null
  available_markets?: (string | null)[] | null
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string | null
  track_number: number
  type: string
  uri: string
  audio_features?: AudioFeaturesItems
}

export interface Album {
  popularity: number
  album_type: string
  artists?: ArtistsEntity[] | null
  available_markets?: (string | null)[] | null
  external_urls: ExternalUrls
  href: string
  id: string
  images?: ImagesEntity[] | null
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

interface ArtistsEntity {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}
