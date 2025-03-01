import { useState } from "react";
import { Link } from "react-router-dom";

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
        </ul>
      </div>
      <div>
      {isLoggedIn ? (<button className="login-out" onClick={()=>setIsLoggedIn(false)}>Log Out</button>) : <Link to="/login"><button className="login-out" onClick={()=>setIsLoggedIn(true)}>Log In</button></Link>}
      </div>
      
    </div>
  );
};

export default Header;
