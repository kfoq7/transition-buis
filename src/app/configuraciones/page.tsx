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
      <div>
        <h1>Configuración de la Aplicación de Mapas</h1>
        <form onSubmit={handleSubmit}>
          <label>
            API Key de Google Maps:
            <input
              type="text"
              value={apiKey}
              onChange={handleChangeApiKey}
              placeholder="Introduce tu API Key de Google Maps"
              required
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </Layout>
  )
}
