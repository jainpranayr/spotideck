import { NextPage } from 'next'
import { signIn } from 'next-auth/react'

const Login: NextPage = () => {
  return (
    <div className='container'>
      <button
        className='login-btn'
        onClick={() => signIn('spotify', { callbackUrl: '/' })}>
        Connect with Spotify
      </button>
    </div>
  )
}

export default Login
