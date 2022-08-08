import { BASE_URL } from './constants'
import axios from 'axios'
import { getSession } from 'next-auth/react'

const getAccessToken = async () => {
  const session = await getSession()
  return session?.accessToken
}

export const customGet = async (url: string): Promise<any> => {
  const token = await getAccessToken()
  try {
    const response = await axios.get(BASE_URL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
