import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resid) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();

    setMenuData(json.data);
  };

  return menuData;
};
export default useRestaurantMenu;
