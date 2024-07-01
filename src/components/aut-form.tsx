'use client'

import { useState, FormEvent } from 'react'

interface AuthFormProps {
  onLogin: (username: string, password: string) => void
  onRegister: (username: string, password: string) => void
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    onLogin(username, password)
  }

  const handleRegister = (event: FormEvent) => {
    event.preventDefault()
    onRegister(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl justify-center font-bold mb-4 text-gray-800">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mr-2"
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
