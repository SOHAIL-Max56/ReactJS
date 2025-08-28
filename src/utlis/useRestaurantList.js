import { useState, useEffect } from "react";
import { Restaurant_API } from "./constants";
const useRestaurantList = () =>{
    const [lisOfRestaurant, setlisOfRestaurant] = useState([]);
      const [filteredRestaurant, setfilteredRestaurnt] = useState([]);
    
      useEffect(() => {
        fetchData(); // Perform any side effects or data fetching here
      }, []);
      console.log("Body Render");
    
      const fetchData = async () => {
        const data = await fetch(Restaurant_API);
        const json = await data.json();
        console.log(json);
    
        setlisOfRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilteredRestaurnt(
          // Make a copy of data in filtered
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };
        return [lisOfRestaurant, filteredRestaurant, setfilteredRestaurnt];
}

export default useRestaurantList;