import { LOGO_URL } from "../utlis/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="App Logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CART</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;