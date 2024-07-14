'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useFavoriteRoutes } from '@/hooks/use-favorite-routes'
import { ArrowUp } from './icons/arrow-up'
import { StarIcon } from './icons/start-icon'

interface Route {
  id: number
  name: string
  start: string
  end: string
}

interface RouteModalProps {
  routes: Route[]
  isOpen: boolean
  onClose: () => void
}

export function RouteModal({ routes, isOpen, onClose }: RouteModalProps) {
  const { favoriteRoutes } = useFavoriteRoutes()
  const [displayedRoutes, setDisplayedRoutes] = useState<Route[]>(routes)

  const handleFavoriteRoutesClick = () => {
    toast.warn('There are no favorite routes')
    if (favoriteRoutes) {
      setDisplayedRoutes(favoriteRoutes)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-[999]">
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
        <div className="py-1">
          <div
            onClick={handleFavoriteRoutesClick}
            className="flex items-center gap-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-400/20"
          >
            <StarIcon className="size-6 fill-yellow-400 cursor-pointer" />
            <h3 className="">Puntos favoritos</h3>
          </div>
        </div>
        <ul className="space-y-4">
          {displayedRoutes.map(({ id, name, start, end }) => (
            <li key={id} className="my-2">
              <div className="font-semibold">{name}</div>
              <div className="flex items-center justify-between gap-x-2 mt-1 p-2 rounded-md hover:bg-gray-400/20">
                <div className="flex items-center gap-x-2">
                  <div>
                    <span className="font-semibold">{start}</span>
                    <p className="text-gray-700/80">Descripcion de la ruta</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <span>{end}</span>
                  <ArrowUp className="size-5" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
