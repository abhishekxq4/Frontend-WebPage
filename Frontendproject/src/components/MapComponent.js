
import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'


const MapComponent = ({ location }) => {


  return (
    <MapContainer center={location} zoom={13} style={{ height: '500px', width: '1000px' }} scrollWheelZoom={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}
        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>

        <Popup>Latitude: {location[0]}<br />Longitude: {location[1]}</Popup>
      </Marker>
    </MapContainer>
  )

}

export default MapComponent;


