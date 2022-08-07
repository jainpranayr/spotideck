export interface ExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href?: null
  total: number
}

export interface ImagesEntity {
  height?: null
  url: string
  width?: null
}

export interface Cursors {
  after: string
}

export interface Owner {
  display_name?: string | undefined
  external_urls: ExternalUrls
  followers?: Followers | undefined
  href: string
  id: string
  images?: ImagesEntity[]
  type: 'user'
  uri: string
}

export interface Tracks {
  href: string
  total: number
}

export interface ExternalIds {
  isrc: string
}

export interface Context<T> {
  href: string
  items: T[]
  limit: number
  next?: string | null
  offset: number
  previous?: string | null
  total: number
  cursors?: Cursors
}
