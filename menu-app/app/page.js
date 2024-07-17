'use client'

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import { useState, useEffect } from "react";


export default  function Home({}) {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  const [allMenuItems, setAllMenuItems] = useState([]);
  const [currentMenuData, setCurrentMenuData] = useState([]);

  const handleOnClick = (restaurant) => {

    const menuItems = allMenuItems.filter(
      (item) => item.name === restaurant.name
    );

    setCurrentMenuData(menuItems);
    menuItems.map((item) => {
      console.log(`Current items: ${item.id}`);
    });
  };


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://menus-api.vercel.app/");
      const data = await res.json();

      const allItems = [
        ...data.pizzas,
        ...data.burgers,
        ...data.desserts,
        ...data.drinks,
        ...data.sandwiches,
        ...data.bbqs,
      ];

      setAllMenuItems(allItems);

    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Map allMenuItems={allMenuItems} handleOnClick={handleOnClick} />
      <Menu currentMenuData={currentMenuData} />
    </div>
  );
}
