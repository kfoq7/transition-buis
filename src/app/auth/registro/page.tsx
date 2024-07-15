'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout'
import { useAuth } from '@/hooks/use-auth'
import { useRegister } from '@/hooks/user-register'
import { User } from '@/types'

export default function Register() {
  const [formData, setFormData] = useState<User>({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })
  const { setUser } = useAuth()
  const { mutate } = useRegister()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate(formData, {
      onSuccess: ({ data }) => {
        setUser(data)
        router.push('/inicio')
      }
    })
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 text-center">Registro</h1>

        <form onSubmit={handleSubmit} className="bg-orange-400/75 p-8 rounded-md shadow-md w-96">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold text-lg">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold text-lg">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold text-lg">
              Contrasña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => router.push('/incio')}
            className="w-full bg-blue-400 text-lg font-semibold py-2 rounded hover:bg-blue-500 transition duration-200 mt-10 drop-shadow-lg border border-black hover:text-black/80"
          >
            Registrarse
          </button>
        </form>
      </div>
    </Layout>
  )
}
