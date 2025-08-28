import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import { useState } from "react";
import { MENU_URL } from "../utlis/constants";
import { useParams } from "react-router";
const RestaurantMenu = () => {
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
    <div className="menu">
      <div className="res-details">
        <h1>{info?.name}</h1>
        <p>{info?.cuisines?.join(", ")}</p>
        <p>{info?.avgRating} stars</p>
        <p>{info?.sla?.slaString}</p>
        <p>{info?.costForTwoMessage}</p>
      </div>

      <h2>Menu Items</h2>
      <div className="rest-menu">
        {categories?.map((cat) => (
          <div key={cat.card.card.title}>
            <h3>{cat.card.card.title}</h3>
            <ul>
              {cat.card.card.itemCards.map((item) => (
                <li key={item.card.info.id} className="menu-item">
                  {item.card.info.ratings.aggregatedRating.rating}{" "}
                  {item.card.info.name} RS-
                  {item.card.info.defaultPrice ||
                    item.card.info.price / 100}{" "}
                  <p className="menu-item-description">
                    {item.card.info.description}
                  </p>
                  <img
                    className="Menu-logo"
                    src={MENU_URL + item.card.info.imageId}
                    alt="Menu Logo"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
