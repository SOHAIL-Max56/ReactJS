import IteamList from "./IteamList";

const RestaurantCategories = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" p-2 m-2 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
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
