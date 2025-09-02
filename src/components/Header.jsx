import useOnlinStatus from "../utlis/useOnlineStatus";
import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("LOGIN");
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
          <li className="px-3  text-cyan-700 hover:text-cyan-500">CART</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
