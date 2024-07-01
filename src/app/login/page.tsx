'use client'

import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWheelchair } from '@fortawesome/free-solid-svg-icons'

export default function SeleccionUsuario() {
  const [selectedUserType, setSelectedUserType] = useState('')

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserType(userType)
    // Aquí podrías redirigir a la siguiente página o guardar la selección, según tu flujo de aplicación
  }

  return (
    <Layout>
      <Head>
        <title>Selección de Tipo de Usuario - Mi Aplicación</title>
      </Head>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Seleccione el tipo de usuario:</h1>
        <div className="flex justify-center gap-8 mt-8">
          <div
            className="cursor-pointer flex flex-col items-center hover:text-blue-500"
            onClick={() => handleUserTypeSelect('comun')}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="5x"
              className="transition-transform transform hover:scale-110"
            />
            <p className="mt-2">Usuario Común</p>
          </div>
          <div
            className="cursor-pointer flex flex-col items-center hover:text-blue-500"
            onClick={() => handleUserTypeSelect('discapacidad')}
          >
            <FontAwesomeIcon
              icon={faWheelchair}
              size="5x"
              className="transition-transform transform hover:scale-110"
            />
            <p className="mt-2">Usuario con Discapacidad</p>
          </div>
        </div>
        {selectedUserType && (
          <p className="mt-4">
            Usted ha seleccionado:{' '}
            {selectedUserType === 'comun' ? 'Usuario Común' : 'Usuario con Discapacidad'}
          </p>
        )}
      </div>
    </Layout>
  )
}
