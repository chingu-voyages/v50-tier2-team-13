"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ restaurants, handleOnClick }) => {

  const bounds = [
    [-85, -180],
    [85, 180],
  ];

  var greenIcon = L.icon({
    iconUrl: "marker.png",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <>
      {restaurants && restaurants.length > 0 ? (
        <MapContainer
          className="map-container"
          center={[45.476833, -89.679495]}
          zoom={2}
          scrollWheelZoom={true}
          minZoom={3}
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
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Map;
