'use client'

import { useContext } from 'react'
import { LocationContext } from '@/context/location'

export function useLocation() {
  const context = useContext(LocationContext)

  if (context == null) {
    throw new Error('useLocation must be used within LocationProvider')
  }

  return context
}
