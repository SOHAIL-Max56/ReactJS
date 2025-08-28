import useOnlinStatus from "../utlis/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utlis/useRestaurantList";
// Body component to display the list of restaurants
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [lisOfRestaurant, filteredRestaurant, setfilteredRestaurnt] =
    useRestaurantList();
  const useOnlineStatus = useOnlinStatus();
  if (useOnlineStatus === false)
    return <h1> 🔴 Offline, Please check your internet connection!! </h1>;

  // This is called Conditional rendering

  return lisOfRestaurant.length == 0 ? (
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
              const filterSearch = lisOfRestaurant.filter(
                // Original Rest sa new filter hua
                (e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurnt(filterSearch); //
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = lisOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setfilteredRestaurnt(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurant/" + resturant.info.id}
            className="link"
          >
            <RestaurantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
