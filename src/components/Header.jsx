import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CART</li>
          <li>CONTACT US</li>
          <button
            className="login"
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
