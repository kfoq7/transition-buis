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
      <div style={{ textAlign: 'center' }}>
        <h1>Seleccione el tipo de usuario:</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => handleUserTypeSelect('comun')}>
            <FontAwesomeIcon icon={faUser} size="5x" />
            <p>Usuario Común</p>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => handleUserTypeSelect('discapacidad')}>
            <FontAwesomeIcon icon={faWheelchair} size="5x" />
            <p>Usuario con Discapacidad</p>
          </div>
        </div>
        {selectedUserType && (
          <p>
            Usted ha seleccionado:{' '}
            {selectedUserType === 'comun' ? 'Usuario Común' : 'Usuario con Discapacidad'}
          </p>
        )}
      </div>
    </Layout>
  )
}
