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
    <div className="body bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
      <div className="filter flex justify-between m-4">
        <div className="search">
          <input
            className="border-solid border-2 border-black rounded-md"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn px-2 py-0.5 m-2 bg-green-300 rounded-md hover:bg-green-200"
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
          className="filter-btn px-2 h-9 m-2 bg-green-300 rounded-md hover:bg-green-200"
          onClick={() => {
            const filteredList = lisOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setfilteredRestaurnt(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="p-4 m-2 rounded-md ">
          <label className="m-2">User Name</label>
          <input className=" border-solid border to-black" />
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-center iteam-strech">
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
