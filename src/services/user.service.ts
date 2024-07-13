import { client } from '@/lib/axios'
import { ContentResponse, User } from '@/types'

export const login = async (login: {
  email: string
  password: string
}): Promise<ContentResponse<User>> => {
  return client.post('/user/login', login)
}

export const register = async (data: User): Promise<ContentResponse<User>> => {
  return client.post('/user/register', data)
}
