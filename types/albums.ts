import { Context } from './common'
import { Album } from './tracks'

interface Albums extends Context<Album> {
  total: number
}

export default Albums
