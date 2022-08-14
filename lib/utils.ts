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
  let res = ''
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / 1000 / 60) % 60)
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24)
  if (hours > 0) {
    res += `${hours}: `
  }
  if (minutes > 0) {
    res += `${minutes}: `
  }
  if (seconds > 0) {
    res += `${seconds}`
  }

  return res
}

export const formatDurationHumans = (ms: number) => {
  let res = ''
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / 1000 / 60) % 60)
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24)

  if (hours > 0) {
    res += `${hours}hr `
  }
  if (minutes > 0) {
    res += `${minutes}min `
  }
  if (seconds > 0) {
    res += `${seconds}sec`
  }

  return res
}

export const formatWithCommas = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
