import RestaurantCard from "./RestaurantCard";
import resList from "../utlis/mockdata";
import { useState } from "react";
// Body component to display the list of restaurants
const Body = () => {
  const [ListofRestaurnt, setListofRestaurnt] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurnt.filter(
              (res) => res.info.avgRating > 4.5
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
