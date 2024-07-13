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
