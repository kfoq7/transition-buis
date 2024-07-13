'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import RoutingMachine from './routing-machine'

interface MapLeafletProps {
  location?: string
}

interface Coordinates {
  lat: number
  lon: number
}

export default function MapLeaflet({ location }: MapLeafletProps) {
  const [destinationCoordinates, setDestinationCoordinates] = useState<Coordinates | undefined>(
    undefined
  )
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({
    lat: -12.00739,
    lon: -77.061487
  })
  const mapRef = useRef<L.Map | null>(null)

  const getCoordinates = async (query: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&countrycodes=PE&bounded=1&limit=1&format=jsonv2`
    )

    const data = await response.json()
    if (data.length > 0) {
      const lat = parseFloat(data[0].lat)
      const lon = parseFloat(data[0].lon)
      setDestinationCoordinates({ lat, lon })
    }
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          setCurrentCoordinates({ lat: latitude, lon: longitude })
        },
        error => {
          console.error('Error getting current location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    if (location) {
      getCoordinates(location)
    }
  }, [location])

  useEffect(() => {
    getCurrentLocation()
  }, [])

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
