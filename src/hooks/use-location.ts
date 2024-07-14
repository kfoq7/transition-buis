'use client'

import { useEffect, useState } from 'react'

interface Params {
  location?: string
}

interface Coordinates {
  lat: number
  lon: number
}

export function useLocation({ location }: Params) {
  const [lastLocationData, setlastLocationData] = useState()
  const [destinationCoordinates, setDestinationCoordinates] = useState<Coordinates | null>(null)
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({
    lat: -12.00739,
    lon: -77.061487
  })

  const getCoordinates = async (query: string) => {
    setDestinationCoordinates(null)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&countrycodes=PE&bounded=1&limit=1&format=jsonv2&viewbox=-77.217,-11.815,-76.708,-12.354`
    )

    const data = await response.json()
    if (data.length > 0) {
      const lat = parseFloat(data[0].lat)
      const lon = parseFloat(data[0].lon)
      setDestinationCoordinates({ lat, lon })
      setlastLocationData(data[0])
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

  return { lastLocationData, destinationCoordinates, currentCoordinates }
}
