"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = ({resturants}) => {



const [restaurants, setRestaurants] = useState([]);


useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://menus-api.vercel.app/');
      const data = await res.json();

      const pizzas = data.pizzas;
      const burgers = data.burgers;
      const desserts = data.desserts;
      const drinks = data.drinks;
      const sandwiches = data.sandwiches;
      const bestFoods = data['best-foods'];

      const allItems = [
        ...data.pizzas,
        ...data.burgers,
        ...data.desserts,
        ...data.drinks,
        ...data.sandwiches,
        ...data['best-foods'],
      ];

      console.log('All Items Before Filter:', allItems);

      const uniqueLocations = new Set();

      const uniqueRestaurants = allItems.
      filter(item => 
        {
        const { latitude, longitude } = item;
        if (latitude == null || longitude == null) 
            {
                console.warn('Invalid location:', item);
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

      console.log('All Items After Filter:', uniqueRestaurants);

    };

    fetchData();
  }, []);



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
       {restaurants.map((restaurant) => (
        <Marker
        key={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
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
