import { useState, useEffect } from "react";
import { Restaurant_API } from "./constants";
const useRestaurantList = () => {
  const [lisOfRestaurant, setlisOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurnt] = useState([]);

  useEffect(() => {
    fetchData(); // Perform any side effects or data fetching here
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_API);
    const json = await data.json();

    setlisOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurnt(
      // Make a copy of data in filtered
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [lisOfRestaurant, filteredRestaurant, setfilteredRestaurnt];
};

export default useRestaurantList;
