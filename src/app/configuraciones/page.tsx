'use client'

import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout' // Asumiendo que tienes un componente Layout

export default function Configuracion() {
  const [apiKey, setApiKey] = useState('') // Estado para almacenar la API Key

  const handleChangeApiKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí podrías guardar la API Key en localStorage, enviarla a un servidor, etc.
    console.log('API Key:', apiKey)
  }

  return (
    <Layout>
      <Head>
        <title>Configuración - Mi Aplicación de Mapas</title>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Configuración de la Aplicación de Mapas</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apiKey">
              API Key de Google Maps:
            </label>
            <input
              id="apiKey"
              type="text"
              value={apiKey}
              onChange={handleChangeApiKey}
              placeholder="Introduce tu API Key de Google Maps"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
