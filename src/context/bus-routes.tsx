'use client'

import { createContext } from 'react'

interface BusRoutesContext {}

export const BusRoutesContext = createContext<BusRoutesContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <BusRoutesContext.Provider value={{}}>{children}</BusRoutesContext.Provider>
}
