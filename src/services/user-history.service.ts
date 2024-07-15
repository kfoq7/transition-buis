import { Route } from 'next'
import { client } from '@/lib/axios'
import { ContentResponse } from '@/types'

export const getUserHistory = async (userId: number): Promise<ContentResponse<Route[]>> => {
  return client.get(`/user-history/${userId}`)
}

export const createUserHistory = async (userId?: number, data?: unknown) => {
  return client.post(`/user-history/${userId}`, data)
}
