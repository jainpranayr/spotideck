import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Container, PrimaryBtn } from '../styles/'

const Login: NextPage = () => {
  const router = useRouter()

  const Heading = styled.h1`
    font-size: 48px;
    margin-bottom: 16px;
  `

  const SubHeading = styled.p`
    margin-bottom: 40px;
  `

  return (
    <Container>
      <Heading>Page not found</Heading>
      <SubHeading>
        We can&apos;t seem to find the page you are looking for.
      </SubHeading>
      <PrimaryBtn onClick={() => router.push('/')}>Home</PrimaryBtn>
    </Container>
  )
}

export default Login
