'use client'

import { useState, FormEvent } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { RouteModal } from '@/components/routes-modal'
import { useLocation } from '@/hooks/use-location'
import { useAuth } from '@/hooks/use-auth'
import { useUserHistoryMutation } from '@/hooks/use-user-history-mutation'
import { toast } from 'react-toastify'

const MapLeaflet = dynamic(() => import('@/components/map-leaflet'), { ssr: false })

interface Route {
  id: number
  name: string
  start: string
  end: string
}

export default function Inicio() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [routes] = useState<Route[]>([
    { id: 1, name: 'Route 1', start: 'Point A', end: 'Point B' },
    { id: 2, name: 'Route 2', start: 'Point C', end: 'Point D' }
  ])

  const router = useRouter()

  const { user } = useAuth()
  const { mutate } = useUserHistoryMutation({ userId: user?.id })
  const { route, fetchLocationDestination } = useLocation()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const query = (event.currentTarget.elements.namedItem('query') as HTMLInputElement).value
    fetchLocationDestination(query)
  }

  const handleSaveRoute = () => {
    if (!user) {
      router.push('/profile')
    }

    if (route) {
      mutate(
        { route },
        {
          onSuccess: () => {
            toast.success('Ruta agregada a favortios')
          },
          onError: error => {
            toast.warn(error?.response.data.error)
          }
        }
      )
    }
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
              onClick={() => {
                if (!user) {
                  router.push('/profile')
                }

                setIsModalOpen(true)
              }}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Mostrar Rutas
            </button>
          </div>
          <div className="h-[420px]">
            <MapLeaflet />
          </div>

          <button
            onClick={handleSaveRoute}
            className="bg-blue-500 text-white p-2 rounded-lg w-full mt-4"
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
