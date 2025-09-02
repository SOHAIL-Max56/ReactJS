import { CARD_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId} = resData?.info;
  return (
    <div className="rest-card  m-4 p-4 py-4 h-[450] w-60  bg-pink-100 hover:bg-pink-200 rounded-lg">
      <img
        className="rounded-lg"
        alt="food logo"
        src={
          CARD_URL +
          cloudinaryImageId
        }
      />
      <h4 className="font-bold ">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} star</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;