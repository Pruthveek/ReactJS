import { useState } from "react";

export const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://static.vecteezy.com/system/resources/previews/005/100/624/large_2x/food-logo-free-vector.jpg"
      alt="logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
      <div>
      {isLoggedIn ? (<button className="login-out" onClick={()=>setIsLoggedIn(false)}>Log Out</button>) : <button className="login-out" onClick={()=>setIsLoggedIn(true)}>Log In</button>}
      </div>
      
    </div>
  );
};

export default Header;
