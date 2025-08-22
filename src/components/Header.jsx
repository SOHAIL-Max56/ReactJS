import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-item">
        <ul className="nav-list">
          <li>
            <Link className="link" to="/">HOME</Link>
          </li>
          <li>
            <Link className="link" to="/about">ABOUT US</Link>
          </li>
          <li>
            CART
          </li>
          <li>
            <Link className="link" to="/contact">CONTACT US</Link>
          </li>
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
