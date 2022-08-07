export interface User {
  country: string
  display_name?: string | undefined
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: { spotify: string }
  followers: { href: null; total: number } | undefined
  href: string
  id: string
  images: {
    height?: number | undefined
    url: string
    width?: number | undefined
  }[]
  product: string
  type: 'user'
  uri: string
}

export interface Playlists {
  type: 'playlist'
  href: string
  items: {
    collaborative: boolean
    description: string | null
    external_urls: { spotify: string }
    href: string
    id: string
    images: {
      height?: number | undefined
      url: string
      width?: number | undefined
    }[]
    name: string
    owner: {
      display_name?: string | undefined
      external_urls: { spotify: string }
      href: string
      id: string
      type: 'user'
      uri: string
    }
    primary_color: null
    public: boolean | null
    snapshot_id: string
    tracks: { href: string; total: number }
    type: 'playlist'
    uri: string
  }
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}

export interface Artists {
  artists: {
    cursors: {
      after: string
      before?: string | undefined
    }
    href: string
    items: {
      external_urls: { spotify: string }
      followers: {
        href: null
        total: number
      }
      genres: string[]
      href: string
      id: string
      images: {
        height?: number | undefined
        url: string
        width?: number | undefined
      }[]
      name: string
      popularity: number
      type: 'artist'
      uri: string
    }[]
    limit: number
    next: string
    total: number
  }
}
