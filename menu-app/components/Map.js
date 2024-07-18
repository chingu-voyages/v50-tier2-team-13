"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ allMenuItems, handleOnClick }) => {
  const bounds = [
    [-85, -180],
    [85, 180],
  ];

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const uniqueLocations = new Set();

    const uniqueRestaurants = allMenuItems.filter((item) => {
      const { latitude, longitude } = item;
      if (latitude == null || longitude == null) {
        console.warn("Invalid location:", item);
        return false;
      }
      const locationKey = `${latitude},${longitude}`;
      if (uniqueLocations.has(locationKey)) {
        return false;
      }
      uniqueLocations.add(locationKey);
      return true;
    });

    setRestaurants(uniqueRestaurants);
  }, [allMenuItems]);

  var greenIcon = L.icon({
    iconUrl: "marker.png",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      className="map-container"
      center={[45.476833, -89.679495]}
      zoom={2}
      scrollWheelZoom={true}
      minZoom={2}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
          icon={greenIcon}
        >
          <Popup>
            {restaurant.name} <br />
            {restaurant.country} <br />
            <button
              className="view-menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleOnClick(restaurant);
              }}
            >
              View Menu
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
