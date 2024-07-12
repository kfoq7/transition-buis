import { client } from '@/lib/axios'
import { User } from '@/types'

export const login = async (name: string, password: string): Promise<User> => {
  return client.post('/user/login', { name, password })
}

export const register = async (data: User): Promise<User> => {
  return client.post('/user/register', data)
}
