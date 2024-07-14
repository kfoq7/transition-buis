'use client'

import dynamic from 'next/dynamic'
import { useState, FormEvent } from 'react'
import { Header } from '@/components/header'
import { RouteModal } from '@/components/routes-modal'
import { useLocation } from '@/hooks/use-location'

const MapLeaflet = dynamic(() => import('@/components/map-leaflet'), { ssr: false })

interface Route {
  id: number
  name: string
  start: string
  end: string
}

export default function Inicio() {
  const [location, setLocation] = useState<string>('')
  const {} = useLocation({ location })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [routes] = useState<Route[]>([
    { id: 1, name: 'Route 1', start: 'Point A', end: 'Point B' },
    { id: 2, name: 'Route 2', start: 'Point C', end: 'Point D' }
  ])

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const query = (event.currentTarget.elements.namedItem('query') as HTMLInputElement).value
    setLocation(query)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />

      <header className="bg-white shadow-md p-4 rounded-lg mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Transcion</h1>
        <p className="text-gray-600">Encuentra tu destino con facilidad</p>
      </header>

      <main>
        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="query"
              placeholder="Buscar ubicación..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="mt-2 w-full p-2 bg-blue-500 text-white rounded-lg">
              Buscar
            </button>
          </form>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between my-2">
            <p className="text-gray-600 mb-4">Mapa principal:</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Mostrar Rutas
            </button>
          </div>
          <div className="h-[420px]">
            <MapLeaflet location={location} />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-lg w-full"
          >
            Guardar ruta
          </button>
        </div>
      </main>

      <footer className="mt-4 text-center text-gray-600">
        &copy; 2024 Transcion. Todos los derechos reservados.
      </footer>

      <RouteModal routes={routes} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
