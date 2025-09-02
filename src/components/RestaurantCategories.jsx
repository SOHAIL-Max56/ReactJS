import IteamList from "./IteamList";

const RestaurantCategories = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" p-2 m-2 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        <div>{showItem && <IteamList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategories;
