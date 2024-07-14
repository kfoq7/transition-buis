'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

export default function Profile() {
  const router = useRouter()
  const { user, setUser } = useAuth()

  if (!user) {
    return (
      <div className="p-4 flex items-center justify-center flex-col min-h-screen bg-gray-100">
        <h2 className="text-5xl font-semibold text-center text-balance mb-4">
          Aún no tienes cuenta!
        </h2>
        <span className="text-2xl text-center text-gray-500/80 mb-8">Si ya tienes cuenta</span>
        <div className="w-full max-w-md space-y-4">
          <Link
            href="/auth/login"
            className="w-full block text-center bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/auth/registro"
            className="w-full block text-center bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
          >
            Registrarse
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/inicio')
    setUser(null)
  }

  return (
    <div className="flex flex-col justify-center items-center rounded-lg h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Usuario</h1>
      </div>

      <div className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <div>
          <label className="block text-gray-700">Nombres</label>
          <p className="text-lg">{user.name}</p>
        </div>
        <div>
          <label className="block text-gray-700">Apellidos</label>
          <p className="text-lg">{user.lastName}</p>
        </div>
        <div>
          <label className="block text-gray-700">Usuario</label>
          <p className="text-lg">{user.username}</p>
        </div>
        <div>
          <label className="block text-gray-700">Correo</label>
          <p className="text-lg">{user.email}</p>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Volver
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}
