"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = () => {

  const locations = [
    { lat: 51.505, lng: -0.09, name: 'Location 1' },
    { lat: 51.515, lng: -0.1, name: 'Location 2' },
];

var greenIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

  return (
    <MapContainer
      className="map-container"
      center={[52.505, -0.09]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {locations.map((location, idx) => (
        <Marker
          key={idx}
          position={[location.lat, location.lng]}
          icon={greenIcon}
        >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
       ))}
    </MapContainer>
  );
};
export default Map;
