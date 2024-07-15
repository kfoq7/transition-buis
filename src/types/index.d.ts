export interface User {
  id?: number
  name: string
  lastName?: string
  username?: string
  password: string
  email: string
}

export interface ContentResponse<T> {
  message?: string
  data: T
}

export interface Route {
  id?: number
  name: string
  description?: string
  lat: number
  lon: number
}

export interface UserHistory {
  id: number
  user: IUser
  route: IRoute
  createdAt: Date
  updatedAt: Date
}
