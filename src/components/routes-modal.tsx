'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { ArrowUp } from './icons/arrow-up'
import { StarIcon } from './icons/start-icon'
import { RouteIcon } from './icons/route-icon'
import { useUserHistory } from '@/hooks/use-user-history'
import { useAuth } from '@/hooks/use-auth'
import { useLocation } from '@/hooks/use-location'
import { Route, UserHistory } from '@/types'

interface RouteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RouteModal({ isOpen, onClose }: RouteModalProps) {
  const [showFavoriteRoutes, setShowFavoriteRoutes] = useState(false)
  const [displayedRoutes, setDisplayedRoutes] = useState<UserHistory[]>([])

  const { user } = useAuth()
  const { historyRoutes } = useUserHistory({ userId: Number(user?.id) })
  const { currentCoordinates, destinationCoordinates, setDestinationCoordinates } = useLocation()

  const handleFavoriteRoutesClick = () => {
    if (!historyRoutes || historyRoutes.length === 0) {
      toast.warn('No tienes lugares favortiso aún')
      return
    }

    setDisplayedRoutes(historyRoutes)
    setShowFavoriteRoutes(true)
  }

  const selectRoute = (route: Route) => {
    setDestinationCoordinates(route)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg p-4 max-w-md w-full divide-y-2 divide-gray-300/30">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-400/80">Rutas</span>
            <h2 className="text-xl font-bold">Rutas Propuestas</h2>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="py-1 flex items-center justify-between">
          <div
            onClick={handleFavoriteRoutesClick}
            className="flex items-center gap-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-400/20"
          >
            <StarIcon className="size-6 fill-yellow-400 cursor-pointer" />
            <h3 className="">Puntos favoritos</h3>
          </div>
          {showFavoriteRoutes && (
            <div
              onClick={() => setShowFavoriteRoutes(false)}
              className="flex items-center gap-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-400/20"
            >
              <h3 className="">Mostrar ruta actual</h3>
              <RouteIcon className="size-6 cursor-pointer" />
            </div>
          )}
        </div>
        {showFavoriteRoutes ? (
          <ul className="space-y-4 max-h-96 overflow-y-auto">
            {displayedRoutes.map(({ id, route }) => (
              <li key={id} className="my-2 cursor-pointer" onClick={() => selectRoute(route)}>
                <div className="flex items-center justify-between gap-x-2 mt-1 p-2 rounded-md hover:bg-gray-400/20">
                  <div className="font-semibold">{route.name}</div>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-700/80">Descripción de la ruta</p>
                  </div>
                  <div className="flex gap-x-2">
                    <span>{route.end}</span>
                    <ArrowUp className="size-5" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-4 text-center">
            <p className="">
              Ruta actual:{' '}
              <strong>{currentCoordinates ? currentCoordinates.name : 'No hay ruta actual'}</strong>
            </p>
            <p>
              Destino:{' '}
              <strong>
                {destinationCoordinates
                  ? destinationCoordinates.name
                  : 'No hay destino establecido'}
              </strong>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
