import React, { Component } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [54.82174574632172, 18.23176067318607];

export default class Map extends Component {
  render() {
    return (
      <div>
          <MapContainer
      style={{ height: "300px"}}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
      </div>
    )
  }
}
