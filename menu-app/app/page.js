"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories"
import LoadCredit from "@/components/LoadCredit";

export default function Home({}) {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  const [allMenuItems, setAllMenuItems] = useState([]);
  const [pizzaMenuItems, setPizzaMenuItems] = useState([]);
  const [burgerMenuItems, setBurgerMenuItems] = useState([]);
  const [dessertsMenuItems, setDessertsMenuItems] = useState([]);
  const [drinksMenuItems, setDrinksMenuItems] = useState([]);
  const [sandwichesMenuItems, setSandwichesMenuItems] = useState([]);
  const [popularMenuItems, setPopularMenuItems] = useState([]);

  const [currentMenuData, setCurrentMenuData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  const [userCredit, setUserCredit] = useState(() => {
    const savedCredit = localStorage.getItem('userCredit');
    return savedCredit !== null ? parseInt(savedCredit, 10) : 0;
  });

  const loadUserCredit = (credit) => {
    setUserCredit(prevFunds => prevFunds + credit);
  }

  const filterCategory = (category) => {
    const locations = allLocations?.filter((item) => {
      const itemid = item.id;
      return category.some((cItem) => cItem.id === itemid);
    });
    setRestaurants(locations);
  };

  const handleCreditToggle = () => {
    console.log("clicked")
    setIsActive(!isActive);
  }

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (restaurant) => {
    const menuItems = allMenuItems.filter(
      (item) => item.name === restaurant.name
    );

    setCurrentMenuData(menuItems);
    menuItems.map((item) => {
      console.log(`Current items: ${item.id}`);
    });

    handleToggleMenu();
  };

  const loadAllLocations = () => {
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
    setAllLocations(uniqueRestaurants);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://menus-api.vercel.app/");
      const data = await res.json();

      console.log("data:" , data)

      const allItems = [
        ...data.pizzas,
        ...data.burgers,
        ...data.desserts,
        ...data.drinks,
        ...data.sandwiches,
        ...data.bbqs,
        ...data['best-foods'],
      ];
      console.log("All Items" , allItems);

      setAllMenuItems(allItems);
      setPizzaMenuItems(data.pizzas);
      setBurgerMenuItems(data.burgers);
      setDessertsMenuItems(data.desserts);
      setDrinksMenuItems(data.drinks);
      setSandwichesMenuItems(data.sandwiches);
      setPopularMenuItems(data['best-foods']);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (allMenuItems.length > 0) {
      loadAllLocations();
    }
  }, [allMenuItems]);

  useEffect(() => {
    localStorage.setItem('userCredit', userCredit);
  }, [userCredit]);

  return (
    <div>
      <Navbar handleCreditToggle={handleCreditToggle} />
      <Categories pizzaMenuItems={pizzaMenuItems} burgerMenuItems={burgerMenuItems} dessertsMenuItems={dessertsMenuItems} drinksMenuItems={drinksMenuItems} sandwichesMenuItems={sandwichesMenuItems} popularMenuItems={popularMenuItems} filterCategory={filterCategory}/>
      <div className="map-placeholder">
      <Map restaurants={restaurants} handleOnClick={handleOnClick} />
      </div>
      <Menu
        currentMenuData={currentMenuData}
        isOpen={isOpen}
        handleToggleMenu={handleToggleMenu}
      />
      <LoadCredit userCredit={userCredit} loadUserCredit={loadUserCredit} isActive={isActive} handleCreditToggle={handleCreditToggle}/>
      <Footer />
    </div>
  );
}
