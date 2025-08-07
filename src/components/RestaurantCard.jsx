import { CARD_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId} = resData?.info;
  return (
    <div className="rest-card">
      <img
        className="food_logo"
        alt="food logo"
        src={
          CARD_URL +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} star</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;