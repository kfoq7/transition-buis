'use client'

import { useRouter } from 'next/navigation'
import AuthForm from '@/components/aut-form'

const Home: React.FC = () => {
  const router = useRouter()

  const handleLogin = (username: string, password: string) => {
    // Lógica de inicio de sesión
    console.log('Iniciar sesión con', username, password)
    // Redirigir al usuario a la página de inicio después del inicio de sesión
    router.push('/inicio')
  }

  const handleRegister = (username: string, password: string) => {
    // Lógica de registro
    console.log('Registrarse con', username, password)
    // Redirigir al usuario a la página de inicio después del registro
    router.push('/inicio')
  }

  return <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
}

export default Home
