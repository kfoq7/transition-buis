'use client'

// pages/index.tsx
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState, FormEvent } from 'react'

// Carga dinámica del componente MapLeaflet para evitar problemas de SSR con Leaflet
const MapLeaflet = dynamic(() => import('@/components/map-leaflet'), { ssr: false })

export default function Inicio() {
  const [location, setLocation] = useState<string>('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = (event.currentTarget.elements.namedItem('query') as HTMLInputElement).value
    setLocation(query)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Transcion - Inicio</title>
        <meta name="description" content="Aplicación de mapas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <p className="text-gray-600 mb-4">Mapa principal:</p>
          <div className="h-[420px]">
            <MapLeaflet location={location} />
          </div>
        </div>
      </main>

      <footer className="mt-4 text-center text-gray-600">
        &copy; 2024 Transcion. Todos los derechos reservados.
      </footer>
    </div>
  )
}
