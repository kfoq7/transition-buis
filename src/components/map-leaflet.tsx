'use client'

import { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import RoutingMachine from './routing-machine'
import { useLocation } from '@/hooks/use-location'

export default function MapLeaflet() {
  const { currentCoordinates, destinationCoordinates } = useLocation()
  const mapRef = useRef<L.Map | null>(null)

  return (
    <MapContainer
      center={[currentCoordinates.lat, currentCoordinates.lon]}
      zoom={11}
      scrollWheelZoom={false}
      className="w-full rounded-lg h-64"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {destinationCoordinates && (
        <RoutingMachine firstPoint={currentCoordinates} secondPoint={destinationCoordinates} />
      )}
    </MapContainer>
  )
}
