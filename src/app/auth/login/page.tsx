'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout'
import { useAuth } from '@/hooks/use-auth'
import { useLogin } from '@/hooks/user-login'

export default function Login() {
  const { setUser } = useAuth()
  const { mutate } = useLogin()
  const router = useRouter()
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: ''
  })

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
      },
      onError: error => {
        console.error('Login failed:', error)
        toast.error('Credenciales invalidas')
      }
    })
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <Image /> */}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold text-lg">
              Correo
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold text-lg">
              Constraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Inciar Sesión
          </button>
          <button
            type="button"
            onClick={() => router.push('/auth/registro')}
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-700 transition duration-200 mt-4"
          >
            Registrarse
          </button>
        </form>
      </div>
    </Layout>
  )
}
