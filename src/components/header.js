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
      </div>
    );
  };

  export default Header;