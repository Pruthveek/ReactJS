import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../hook/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Logo = () => (
  <Link to="/">
    <img
      className="logo"
      src="https://static.vecteezy.com/system/resources/previews/005/100/624/large_2x/food-logo-free-vector.jpg"
      alt="logo"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token") // Simulate persisted login
  );
  const isOnline = useOnline();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } else {
      localStorage.setItem("token", "fake_token"); // Simulate login
      setIsLoggedIn(true);
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li>
            <Link to="/cart">🛒<sup>{cartItems.length}</sup></Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <button className="login-out" onClick={handleLoginLogout}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        <h3>
          {user.name} {isOnline ? "😊" : "🥶"}
        </h3>
      </div>
    </div>
  );
};

export default Header;
