'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export function MapLeaflet() {
  const getCordinates = async () => {
    const response = await fetch(
      'https://nominatim.openstreetmap.org/search.php?q=puente+piedra+peru&format=jsonv2'
    )

    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getCordinates()
  }, [])

  return (
    <MapContainer
      center={[-12.00739, -77.061487]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
