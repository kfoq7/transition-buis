'use client'

import { createContext, useCallback, useEffect, useState } from 'react'
import { Route } from '@/types'

// interface Coordinates {
//   lat: number
//   lon: number
// }

interface LocationContextProps {
  route: Route | null
  setRoute: (route: Route | null) => void
  destinationCoordinates: Route | null
  currentCoordinates: Route | null
  fetchLocationDestination: (location: string) => void
  setDestinationCoordinates: (coorddinates: Route) => void
}

export const LocationContext = createContext<LocationContextProps | null>(null)

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route | null>(null)
  const [destinationCoordinates, setDestinationCoordinates] = useState<Route | null>(null)
  const [currentCoordinates, setCurrentCoordinates] = useState<Route>({
    name: '',
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
      const destination = data[0]
      const lat = parseFloat(destination.lat)
      const lon = parseFloat(destination.lon)

      const routeData: Route = {
        name: destination.display_name,
        lat,
        lon
      }

      setRoute(routeData)
      setDestinationCoordinates(routeData)
    }
  }

  const getPlaceByCoordinates = async (lat: number, lon: number) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&countrycodes=PE&format=jsonv2`
    )

    const data = await response.json()
    if (data && data.display_name) {
      return data.display_name // Return the place name or relevant information
    }
    return null // Handle the case where no data is found
  }

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords
          const place = await getPlaceByCoordinates(latitude, longitude)
          // console.log(plac)
          setCurrentCoordinates({ name: place, lat: latitude, lon: longitude })
        },
        error => {
          console.error('Error getting current location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  const fetchLocationDestination = (location?: string) => {
    if (location) {
      getCoordinates(location)
    }
  }

  return (
    <LocationContext.Provider
      value={{
        route,
        setRoute,
        destinationCoordinates,
        currentCoordinates,
        fetchLocationDestination,
        setDestinationCoordinates
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
