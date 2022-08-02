import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { Container, PrimaryBtn } from '../styles/'

const Login: NextPage = () => {
  return (
    <Container>
      <PrimaryBtn onClick={() => signIn('spotify', { callbackUrl: '/' })}>
        Connect with Spotify
      </PrimaryBtn>
    </Container>
  )
}

export default Login
