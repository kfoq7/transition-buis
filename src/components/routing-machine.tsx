'use client'

import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

interface Coordinates {
  lat: number
  lon: number
}

interface Points {
  firstPoint?: Coordinates
  secondPoint?: Coordinates
}

const createRoutineMachineLayer = ({ firstPoint, secondPoint }: Points) => {
  const waypoints = []

  console.log(firstPoint, secondPoint)

  if (firstPoint) {
    waypoints.push(L.latLng(firstPoint.lat, firstPoint.lon))
  }

  if (secondPoint) {
    waypoints.push(L.latLng(secondPoint.lat, secondPoint.lon))
  }

  if (waypoints.length === 0) {
    return null
  }

  const instance = L.Routing.control({
    waypoints,
    // lineOptions: {
    //   styles: [{ color: '#6FA1EC', weight: 4 }]
    // },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    // draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
