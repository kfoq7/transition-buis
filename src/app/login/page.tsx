'use client'

import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí puedes implementar la lógica de autenticación (ejemplo simplificado)
    if (username === 'usuario' && password === 'contraseña') {
      // Redirigir a la página principal o a la siguiente página
      console.log('Inicio de sesión exitoso')
    } else {
      setErrorMessage('Usuario o contraseña incorrectos')
    }
  }

  return (
    <Layout>
      <Head>
        <title>Iniciar Sesión - Mi Aplicación</title>
      </Head>
      <div style={{ textAlign: 'center' }}>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </Layout>
  )
}
