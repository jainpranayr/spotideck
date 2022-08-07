import { ExternalUrls, ImagesEntity, Owner, Context, Tracks } from './common'

interface Playlists extends Context<ItemsEntity> {}

interface ItemsEntity {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
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

export default Playlists
