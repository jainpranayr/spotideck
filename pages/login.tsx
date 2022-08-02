import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import styled from 'styled-components'
import { Container } from '../styles/'

const LoginButton = styled.button`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    background-color: var(--green);
    text-decoration: none;
    filter: brightness(1.1);
  }
`

const Login: NextPage = () => {
  return (
    <Container>
      <LoginButton
        className='login-btn'
        onClick={() => signIn('spotify', { callbackUrl: '/' })}>
        Connect with Spotify
      </LoginButton>
    </Container>
  )
}

export default Login
