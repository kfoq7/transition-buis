import L from 'leaflet'

export const iconPerson = new L.Icon({
  iconUrl: require('../img/marker-pin-person.svg'),
  iconRetinaUrl: require('../img/marker-pin-person.svg'),
  // iconAnchor: null,
  // popupAnchor: null,
  // shadowUrl: null,
  // shadowSize: null,
  // shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon'
})
