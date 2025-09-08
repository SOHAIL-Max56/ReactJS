import useOnlinStatus from "../utlis/useOnlineStatus";
import { LOGO_URL } from "../utlis/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnLogin, setBtnLogin] = useState("LOGIN");

  const {userName} = useContext(UserContext);
// Subscribing to the Store using Selector
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-300 sm:bg-lime-200 md:bg-yellow-400 lg:bg-green-400 xl:bg-purple-400 2xl:bg-red-400">
      <div className="logo-cont">
        <img className="w-24 rounded-full" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-item">
        <ul className="flex p-2 m-5">
          <li className="px-3">
            Online Status: {useOnlinStatus() ? "✅" : "🔴"}
          </li>
          <li className="home px-3 text-cyan-700 hover:text-cyan-500 ">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="px-3 text-cyan-700 hover:text-cyan-500">
            <Link className="link" to="/about">
              ABOUT US
            </Link>
          </li>
          <li className="px-3  text-cyan-700 hover:text-cyan-500">
            <Link className="link" to="/grocery">
              GROCERY
            </Link>
          </li>
          <li className="px-3  text-cyan-700 hover:text-cyan-500"><Link to='/cart'>CART- ({cartItems.length} items)</Link></li>
          <li className="px-3 text-cyan-700 hover:text-cyan-500">
            <Link className="link" to="/contact">
              CONTACT US
            </Link>
          </li>
          <button
            className="login  text-cyan-700 hover:text-cyan-500"
            onClick={() => {
              btnLogin == "LOGIN"
                ? setBtnLogin("LOGOUT")
                : setBtnLogin("LOGIN");
            }}
          >
            {btnLogin}
          </button>
          {/* <li className="px-3 text-cyan-700 hover:text-cyan-500">
            {userName}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
