'use client'

import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function Registro() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí puedes implementar la lógica de registro (ejemplo simplificado)
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden')
    } else {
      // Aquí podrías guardar el usuario y contraseña en una base de datos o local storage
      console.log('Usuario registrado:', username)
      console.log('Contraseña:', password)
      // Redirigir a la página de inicio de sesión, por ejemplo
    }
  }

  return (
    <Layout>
      <Head>
        <title>Registro - Mi Aplicación</title>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Registro</h1>
        <form onSubmit={handleRegister} className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirmar Contraseña:
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
