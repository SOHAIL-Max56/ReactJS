import RestaurantCard from "./RestaurantCard";
import resList from "../utlis/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// Body component to display the list of restaurants
const Body = () => {
  const [ListofRestaurnt, setListofRestaurnt] = useState([]);
  const [filteredRestaurant, setfilteredRestaurnt] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData(); // Perform any side effects or data fetching here
  }, []);
  console.log("Body Render");

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6349892&lng=88.4371525&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListofRestaurnt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurnt(    // Make a copy of data in filtered 
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // This is called Conditional rendering

  return ListofRestaurnt.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterSearch = ListofRestaurnt.filter(     // Original Rest sa new filter hua
                (e) => e.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              );
              setfilteredRestaurnt(filterSearch);     // 
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurnt.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListofRestaurnt(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {ListofRestaurnt.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
