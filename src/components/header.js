import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../hook/useOnline";
import UserContext from "../utils/userContext";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

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
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        {isLoggedIn ? (
          <button className="login-out" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </button>
        ) : (
          <button
            className="login-out"
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/login");
            }}
          >
            Log In
          </button>
        )}
        <h3>
          {user.name}
          {isOnline ? "😊" : "🥶"}
        </h3>
      </div>
    </div>
  );
};

export default Header;
