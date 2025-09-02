import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import { useState } from "react";
import { useParams } from "react-router";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState("");

  const { resid } = useParams();
  const menuData = useRestaurantMenu(resid);

  if (menuData == null) return <Shimmer />;

  // Restaurant info
  const info = menuData?.cards
    ?.map((c) => c?.card?.card?.info)
    .find((x) => x?.name);

  // Menu categories
  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.itemCards
    );

  return (
    <div className="menu bg-linear-to-r from-blue-100 to-blue-300">
      <div className="text-center font-bold shadow-box p-4 m-4 bg-blue-300 rounded-lg">
        <h1>{info?.name}</h1>
        <p>{info?.cuisines?.join(", ")}</p>
        <p>{info?.avgRating} stars</p>
        <p>{info?.sla?.slaString}</p>
        <p>{info?.costForTwoMessage}</p>
      </div>
      <div className="rest-menu shadow-box p-4 m-4 rounded-lg">
        {categories?.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItem = {index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
