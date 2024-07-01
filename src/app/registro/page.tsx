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
      <div style={{ textAlign: 'center' }}>
        <h1>Registro</h1>
        <form onSubmit={handleRegister}>
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
          <label>
            Confirmar Contraseña:
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Registrar</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </Layout>
  )
}
