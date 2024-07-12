'use client'

import { createContext, useState } from 'react'
import { User } from '@/types'

interface AuthContext {
  user: User | null
  setUser: (user: User) => void
}

export const AuthContext = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
