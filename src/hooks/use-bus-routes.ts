import { useContext } from 'react'
import { BusRoutesContext } from '@/context/bus-routes'

export function useBusRoutes() {
  const context = useContext(BusRoutesContext)

  if (context == null) {
    throw new Error('useBusRoutes must be used within a BusRoutesProvider')
  }

  return context
}
