'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

interface MapLeafletProps {
  location: string
}

interface Coordinates {
  lat: number
  lon: number
}

export default function MapLeaflet({ location }: MapLeafletProps) {
  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: -12.00739, lon: -77.061487 })
  const [markers, setMarkers] = useState<Coordinates[]>([])
  const mapRef = useRef<L.Map | null>(null)

  const getCoordinates = async (query: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&countrycodes=PE&bounded=1&limit=1&format=jsonv2`
    )
    const data = await response.json()
    if (data.length > 0) {
      const lat = parseFloat(data[0].lat)
      const lon = parseFloat(data[0].lon)
      setCoordinates({ lat, lon })
      setMarkers([{ lat, lon }])
    }
  }

  useEffect(() => {
    if (location) {
      getCoordinates(location)
    }
  }, [location])

  useEffect(() => {
    if (mapRef.current && markers.length > 0) {
      mapRef.current.fitBounds(
        markers.map(marker => [marker.lat, marker.lon]) as L.LatLngBoundsExpression
      )
    }
  }, [markers])

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lon]}
      zoom={11}
      scrollWheelZoom={false}
      className="w-full rounded-lg h-64"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]}>
          <Popup>
            {location} <br /> Coordenadas: {marker.lat}, {marker.lon}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
