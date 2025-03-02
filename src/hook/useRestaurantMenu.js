import { useState, useEffect } from "react";
import { fetch_menu } from "../components/config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
        fetch_menu + id
    );
    const json = await data.json();
    console.log("this is >>>" + json);
    setRestaurant(json);
  }

  return restaurant;
};

export default useRestaurantMenu;
