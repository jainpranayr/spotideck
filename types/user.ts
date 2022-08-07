import { ExplicitContent, Owner } from './common'

interface User extends Owner {
  country: string
  email: string
  explicit_content: ExplicitContent
  product: string
}

export default User
