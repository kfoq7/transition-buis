'use client'

import { useAuth } from '@/hooks/use-auth'

export default function Profile() {
  const { user } = useAuth()

  if (!user) {
    return <div>You are not logged in</div>
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
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
          <label className="block text-gray-700">usuario</label>
          <p className="text-lg">{user.username}</p>
        </div>
        <div>
          <label className="block text-gray-700">Correo</label>
          <p className="text-lg">{user.username}</p>
        </div>
      </div>
    </div>
  )
}
