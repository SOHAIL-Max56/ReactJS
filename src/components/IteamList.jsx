import { useDispatch } from "react-redux";
import { MENU_URL } from "../utlis/constants";
import { additem } from "../utlis/CartSlice";
const IteamList = ({ items }) => {
  // console.log(items, "Item List");
  const dispatch = useDispatch();
  const handleAdditems = (item) => {
    // Dispatch the action
    dispatch(additem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-300 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div>
              <div className="absolute">
                <button
                  className="p-2 mx-18 rounded-lg cursor-pointer bg-amber-200 text-blue-400 shadow-lg"
                  onClick={() => handleAdditems(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                className="w-full rounded-lg"
                src={MENU_URL + item.card.info.imageId}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IteamList;
